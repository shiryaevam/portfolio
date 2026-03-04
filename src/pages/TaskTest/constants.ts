import type { SelectProps } from "antd";

import type { TaskStatus } from "./types.ts";

export const STATUSES = ["new", "in_progress", "blocked", "done"] as const;

const [statusNew, progress, blocked, done] = STATUSES;

export const TASK_TYPE = {
  CREATED: "created",
  DELETED: "deleted",
  UPDATED: "updated"
} as const;

export const TASK_TEST_TAB_KEYS = {
  stats: "stats",
  tasks: "tasks"
} as const;

export const TASK_STATUS_META: Record<
  TaskStatus,
  { label: string; color: string }
> = {
  blocked: { label: "Blocked", color: "red" },
  done: { label: "Done", color: "green" },
  in_progress: { label: "In progress", color: "gold" },
  new: { label: "New", color: "blue" }
};

export const TASK_STATUS_FILTER_ALL = "all" as const;

export const TASK_STATUS_FILTER_OPTIONS: SelectProps["options"] = [
  { label: "All", value: TASK_STATUS_FILTER_ALL },
  { label: TASK_STATUS_META.new.label, value: statusNew },
  { label: TASK_STATUS_META.in_progress.label, value: progress },
  { label: TASK_STATUS_META.blocked.label, value: blocked },
  { label: TASK_STATUS_META.done.label, value: done }
];
