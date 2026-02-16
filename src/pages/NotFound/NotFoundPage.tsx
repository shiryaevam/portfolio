import React from "react";
import { useOutletContext } from "react-router-dom";

import { Typography } from "antd";

import type { LayoutContext } from "../../shared/types/OutletContextType.ts";

const { Title } = Typography;

const NotFoundPage: React.FC = () => {
  const { referenceContainer } = useOutletContext<LayoutContext>();

  return (
    <div
      style={{
        padding: "24px",
        position: "relative",
        textAlign: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
      ref={referenceContainer}
    >
      <Title
        style={{
          fontSize: "120px",
          color: "#00ff88",
          margin: 0,
          textShadow: "0 0 20px rgba(0, 255, 136, 0.5)"
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
};

export default NotFoundPage;
