import {
  Card,
  Divider,
  Flex,
  Progress,
  Space,
  Statistic,
  Tag,
  Typography
} from "antd";

import type { StatsTabProperties } from "./types.ts";

import { STATUSES, TASK_STATUS_META } from "./constants.ts";

import styles from "./TaskTest.module.css";

export const StatsTab = ({ counters, stats }: StatsTabProperties) => (
  <Space className={styles.fullWidthSpace} orientation="vertical" size="large">
    <Card>
      <Space orientation="vertical" size="small">
        <Typography.Title className={styles.noMarginTitle} level={4}>
          Overview
        </Typography.Title>
        <Typography.Text type="secondary">
          Counts update in real time from the mock stream.
        </Typography.Text>
      </Space>
      <Divider />
      <Flex gap={16} wrap>
        <Card className={styles.statCard} size="small">
          <Statistic title="Total tasks" value={stats.total} />
        </Card>
        <Card className={styles.statCard} size="small">
          <Statistic title="Created events" value={counters.created} />
        </Card>
        <Card className={styles.statCard} size="small">
          <Statistic title="Updated events" value={counters.updated} />
        </Card>
        <Card className={styles.statCard} size="small">
          <Statistic title="Deleted events" value={counters.deleted} />
        </Card>
      </Flex>
    </Card>

    <Card title="By status">
      <Space
        className={styles.verticalSpaceMiddle}
        orientation="vertical"
        size="middle"
      >
        {STATUSES.map((status) => {
          const count = stats.byStatus[status];
          const percent = stats.total === 0 ? 0 : (count / stats.total) * 100;

          return (
            <div key={status}>
              <Flex align="center" justify="space-between">
                <Space>
                  <Tag color={TASK_STATUS_META[status].color}>
                    {TASK_STATUS_META[status].label}
                  </Tag>
                  <Typography.Text type="secondary">{count}</Typography.Text>
                </Space>
                <Typography.Text type="secondary">
                  {Math.round(percent)}%
                </Typography.Text>
              </Flex>
              <Progress
                percent={Math.round(percent)}
                showInfo={false}
                strokeColor={TASK_STATUS_META[status].color}
              />
            </div>
          );
        })}
      </Space>
    </Card>
  </Space>
);
