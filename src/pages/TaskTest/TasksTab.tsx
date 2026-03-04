import { Badge, Card, Flex, Select, Space, Table, Tag, Typography } from "antd";

import type { TableProps } from "antd";

import type { Task, TasksTabProperties, TaskStatus } from "./types.ts";

import { TASK_STATUS_FILTER_OPTIONS, TASK_STATUS_META } from "./constants.ts";
import { formatTime } from "./utils.ts";

import styles from "./TaskTest.module.css";

export const TasksTab = ({
  counters,
  filteredTasks,
  onStatusFilterChange,
  statusFilter
}: TasksTabProperties) => {
  const columns: TableProps<Task>["columns"] = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (value: string) => (
        <Typography.Text code copyable>
          {value}
        </Typography.Text>
      )
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (value: TaskStatus) => (
        <Tag color={TASK_STATUS_META[value].color}>
          {TASK_STATUS_META[value].label}
        </Tag>
      )
    },
    {
      title: "Last update",
      dataIndex: "updatedAt",
      defaultSortOrder: "descend",
      key: "updatedAt",
      render: (value: number) => (
        <Typography.Text type="secondary">{formatTime(value)}</Typography.Text>
      ),
      sorter: (a, b) => a.updatedAt - b.updatedAt
    }
  ];

  return (
    <Space
      className={styles.fullWidthSpace}
      orientation="vertical"
      size="large"
    >
      <Card>
        <Flex align="center" justify="space-between" wrap>
          <Space size="large" wrap>
            <Space>
              <Badge status="processing" />
              <Typography.Text>Live stream</Typography.Text>
            </Space>
            <Typography.Text type="secondary">
              Events: +{counters.created} / ~{counters.updated} / -
              {counters.deleted}
            </Typography.Text>
          </Space>
          <Space>
            <Typography.Text type="secondary">Status filter</Typography.Text>
            <Select
              className={styles.selectMinWidth}
              onChange={(value) => onStatusFilterChange(value)}
              options={TASK_STATUS_FILTER_OPTIONS}
              value={statusFilter}
            />
          </Space>
        </Flex>
      </Card>

      <Table
        pagination={{
          pageSize: 10,
          showSizeChanger: true,
          showTotal: (total) => total
        }}
        columns={columns}
        dataSource={filteredTasks}
        rowKey={(record) => record.id}
        size="middle"
      />
    </Space>
  );
};
