import { ACTIONS_TASK, STATUSES, TASK_STATUS_FILTER_ALL } from "./constants.ts";

export type StatsTabProperties = {
  counters: TaskStreamCounters;
  stats: TaskStats;
};

export type Task = {
  id: string;
  status: TaskStatus;
  updatedAt: number;
};

export type TaskAggregator = {
  getTask: (id: string) => Task | undefined;
  getTasks: () => Task[];
  start: () => void;
  stop: () => void;
  subscribe: (listener: (event: TaskChangeEvent) => void) => () => void;
};
export type TaskChangeEvent =
  | { id: string; previous: Task; type: ACTIONS_TASK.DELETED }
  | { previous: Task; task: Task; type: ACTIONS_TASK.UPDATED }
  | { task: Task; type: ACTIONS_TASK.CREATED };

export type TasksTabProperties = {
  counters: TaskStreamCounters;
  filteredTasks: Task[];
  onStatusFilterChange: (next: TaskStatusFilter) => void;
  statusFilter: TaskStatusFilter;
};
export type TaskStats = {
  byStatus: Record<TaskStatus, number>;
  total: number;
};

export type TaskStatus = (typeof STATUSES)[number];

export type TaskStatusFilter = TaskStatus | typeof TASK_STATUS_FILTER_ALL;

export type TaskStreamCounters = {
  created: number;
  deleted: number;
  updated: number;
};

export type UseMockTaskAggregatorResult = {
  counters: TaskStreamCounters;
  filteredTasks: Task[];
  setStatusFilter: (next: TaskStatusFilter) => void;
  stats: TaskStats;
  statusFilter: TaskStatusFilter;
  tasks: Task[];
};
