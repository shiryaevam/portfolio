import { Space, Tabs, Typography } from "antd";

import type { TabsProps } from "antd";

import { TASK_TEST_TAB_KEYS } from "./constants.ts";
import { StatsTab } from "./StatsTab";
import { TasksTab } from "./TasksTab";
import { useMockTaskAggregator } from "./useMockTaskAggregator";

import styles from "./TaskTest.module.css";

export const TaskTest = () => {
  const { counters, filteredTasks, setStatusFilter, stats, statusFilter } =
    useMockTaskAggregator();

  const tabs: TabsProps["items"] = [
    {
      label: "Tasks",
      children: (
        <TasksTab
          counters={counters}
          filteredTasks={filteredTasks}
          onStatusFilterChange={setStatusFilter}
          statusFilter={statusFilter}
        />
      ),
      key: TASK_TEST_TAB_KEYS.tasks
    },
    {
      label: "Stats",
      children: <StatsTab counters={counters} stats={stats} />,
      key: TASK_TEST_TAB_KEYS.stats
    }
  ];

  return (
    <Space
      className={`${styles.fullWidthSpace} ${styles.spasePage}`}
      orientation="vertical"
      size="large"
    >
      <Typography.Title className={styles.noMarginTitle} level={3}>
        TaskTest
      </Typography.Title>
      <Tabs defaultActiveKey={TASK_TEST_TAB_KEYS.tasks} items={tabs} />
    </Space>
  );
};
