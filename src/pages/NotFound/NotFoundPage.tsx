import React from "react";

import { Typography } from "antd";

const { Title } = Typography;

const NotFoundPage: React.FC = () => (
  <div
    style={{
      padding: "24px",
      textAlign: "center",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Title
      style={{
        fontSize: "120px",
        color: "#00ff88",
        margin: 0,
        textShadow: "0 0 20px rgba(0, 255, 136, 0.5)",
      }}
      level={1}
    >
      404
    </Title>
    <Title level={2} style={{ color: "#e5e5e5", marginTop: "16px" }}>
      Page Not Found
    </Title>
  </div>
);

export default NotFoundPage;
