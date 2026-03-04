/* eslint-disable sonarjs/pseudo-random */

import type { Task, TaskAggregator, TaskChangeEvent } from "./types.ts";

import { STATUSES, TASK_TYPE } from "./constants.ts";

const randomInt = (minInclusive: number, maxInclusive: number): number => {
  const min = Math.ceil(minInclusive);
  const max = Math.floor(maxInclusive);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const pickOne = <T>(items: readonly T[]): T =>
  items[randomInt(0, items.length - 1)] as T;

const generateId = (): string => {
  // compact, stable-enough id for mock tasks
  const rand = Math.random().toString(16).slice(2, 8);

  return `tsk_${Date.now().toString(16)}_${rand}`;
};

export const createMockTaskAggregator = ({
  initialTasks = 12,
  maxTasks = 80,
  tickMsRange = [400, 900]
}: {
  initialTasks?: number;
  maxTasks?: number;
  tickMsRange?: readonly [number, number];
} = {}): TaskAggregator => {
  const tasks = new Map<string, Task>();
  const listeners = new Set<(event: TaskChangeEvent) => void>();
  let timeoutId: ReturnType<typeof globalThis.setTimeout> | undefined;
  let running = false;

  const emit = (event: TaskChangeEvent) => {
    for (const listener of listeners) {
      listener(event);
    }
  };

  const createTask = (): Task => {
    const now = Date.now();

    return { id: generateId(), status: pickOne(STATUSES), updatedAt: now };
  };

  const tick = () => {
    const size = tasks.size;
    const canCreate = size < maxTasks;
    const canMutate = size > 0;

    // Bias actions a bit to keep list lively
    // - create more often early
    // - update more often once there are tasks
    // - delete occasionally
    let action: "create" | "delete" | "update";

    if (!canMutate) {
      action = "create";
    } else if (canCreate) {
      const roll = Math.random();

      if (roll < 0.45) {
        action = "create";
      } else if (roll < 0.85) {
        action = "update";
      } else {
        action = "delete";
      }
    } else {
      action = Math.random() < 0.8 ? "update" : "delete";
    }

    if (action === "create") {
      const task = createTask();

      tasks.set(task.id, task);
      emit({ task, type: TASK_TYPE.CREATED });

      return;
    }

    const ids = [...tasks.keys()];
    const id = pickOne(ids);
    const current = tasks.get(id);

    if (!current) return;

    if (action === "delete") {
      tasks.delete(id);
      emit({ id, previous: current, type: TASK_TYPE.DELETED });

      return;
    }

    // update
    const isChangingStatus = Math.random() < 0.7;
    const nextStatus = isChangingStatus
      ? pickOne(STATUSES.filter((s) => s !== current.status))
      : current.status;
    const next: Task = {
      ...current,
      status: nextStatus,
      updatedAt: Date.now()
    };

    tasks.set(id, next);
    emit({ previous: current, task: next, type:TASK_TYPE.UPDATED });
  };

  const scheduleNextTick = () => {
    if (!running) return;
    const delay = randomInt(tickMsRange[0], tickMsRange[1]);

    timeoutId = setTimeout(() => {
      tick();
      scheduleNextTick();
    }, delay);
  };

  // seed initial tasks
  for (let index = 0; index < initialTasks; index += 1) {
    const task = createTask();

    tasks.set(task.id, task);
  }

  return {
    getTask(id) {
      return tasks.get(id);
    },
    getTasks() {
      return [...tasks.values()].sort((a, b) => b.updatedAt - a.updatedAt);
    },
    start() {
      if (running) return;
      running = true;
      scheduleNextTick();
    },
    stop() {
      running = false;
      if (timeoutId !== undefined) {
        clearTimeout(timeoutId);
        timeoutId = undefined;
      }
    },
    subscribe(listener) {
      listeners.add(listener);

      return () => {
        listeners.delete(listener);
      };
    }
  };
};
