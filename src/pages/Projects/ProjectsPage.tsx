import React from "react";
import { useOutletContext } from "react-router-dom";

import { Typography } from "antd";

import type { LayoutContext } from "../../shared/types/OutletContextType.ts";

import styles from "./ProjectsPage.module.css";

const { Title } = Typography;

const ProjectsPage: React.FC = () => {
  const { referenceContainer } = useOutletContext<LayoutContext>();

  return (
    <div className={styles.page} ref={referenceContainer}>
      <Title className={styles.title} level={1}>
        Projects Page - Coming Soon
      </Title>
      <p>Project cards grid will be implemented here.</p>
    </div>
  );
};

export default ProjectsPage;
