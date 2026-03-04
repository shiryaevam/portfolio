import { useEffect, useMemo, useRef, useState } from "react";

import type {
  Task,
  TaskAggregator,
  TaskStatusFilter,
  TaskStreamCounters,
  UseMockTaskAggregatorResult
} from "./types.ts";

import { TASK_STATUS_FILTER_ALL } from "./constants.ts";
import { createMockTaskAggregator } from "./mockTaskAggregator";
import {
  applyTaskChangeEvent,
  computeTaskStats,
  updateCounters
} from "./utils.ts";

export const useMockTaskAggregator = (): UseMockTaskAggregatorResult => {
  const aggregatorReference = useRef<null | TaskAggregator>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [counters, setCounters] = useState<TaskStreamCounters>({
    created: 0,
    deleted: 0,
    updated: 0
  });
  const [statusFilter, setStatusFilter] = useState<TaskStatusFilter>(
    TASK_STATUS_FILTER_ALL
  );

  useEffect(() => {
    const aggregator = createMockTaskAggregator();

    aggregatorReference.current = aggregator;

    setTasks(aggregator.getTasks());
    aggregator.start();

    const unsubscribe = aggregator.subscribe((event) => {
      setTasks((previous) => applyTaskChangeEvent(previous, event));
      setCounters((previous) => updateCounters(previous, event));
    });

    return () => {
      unsubscribe();
      aggregator.stop();
      aggregatorReference.current = null;
    };
  }, []);

  const filteredTasks = useMemo(() => {
    const base =
      statusFilter === TASK_STATUS_FILTER_ALL
        ? tasks
        : tasks.filter((t) => t.status === statusFilter);

    return [...base].sort((a, b) => b.updatedAt - a.updatedAt);
  }, [statusFilter, tasks]);

  const stats = useMemo(() => computeTaskStats(tasks), [tasks]);

  return {
    counters,
    filteredTasks,
    setStatusFilter,
    stats,
    statusFilter,
    tasks
  };
};
