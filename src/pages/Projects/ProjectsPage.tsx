import React from "react";
import { useOutletContext } from "react-router-dom";

import { Typography } from "antd";

import type { LayoutContext } from "../../shared/types/OutletContextType.ts";

const { Title } = Typography;

const ProjectsPage: React.FC = () => {
  const { referenceContainer } = useOutletContext<LayoutContext>();

  return (
    <div
      ref={referenceContainer}
      style={{ padding: "24px", position: "relative" }}
    >
      <Title level={1} style={{ color: "#00ff88" }}>
        Projects Page - Coming Soon
      </Title>
      <p>Project cards grid will be implemented here.</p>
    </div>
  );
};

export default ProjectsPage;
