import type {
  Task,
  TaskChangeEvent,
  TaskStats,
  TaskStatus,
  TaskStreamCounters
} from "./types.ts";

export const formatTime = (timestampMs: number): string => {
  const date = new Date(timestampMs);

  return date.toLocaleTimeString();
};

export const applyTaskChangeEvent = (
  previous: Task[],
  event: TaskChangeEvent
): Task[] => {
  if (event.type === "created") return [event.task, ...previous];
  if (event.type === "deleted")
    return previous.filter((t) => t.id !== event.id);

  return previous.map((t) => (t.id === event.task.id ? event.task : t));
};

export const updateCounters = (
  previous: TaskStreamCounters,
  event: TaskChangeEvent
): TaskStreamCounters => ({
  created: previous.created + (event.type === "created" ? 1 : 0),
  deleted: previous.deleted + (event.type === "deleted" ? 1 : 0),
  updated: previous.updated + (event.type === "updated" ? 1 : 0)
});

export const computeTaskStats = (tasks: Task[]): TaskStats => {
  const byStatus: Record<TaskStatus, number> = {
    blocked: 0,
    done: 0,
    in_progress: 0,
    new: 0
  };

  for (const task of tasks) {
    byStatus[task.status] += 1;
  }

  return { byStatus, total: tasks.length };
};
