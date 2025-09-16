import React from "react";

import { Typography } from "antd";

const { Title } = Typography;

const AboutPage: React.FC = () => (
  <div style={{ padding: "24px" }}>
    <Title level={1} style={{ color: "#00ff88" }}>
      About Page - Coming Soon
    </Title>
    <p>README.md editor will be implemented here.</p>
  </div>
);

export default AboutPage;
