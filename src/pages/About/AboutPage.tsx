import { useOutletContext } from "react-router-dom";

import { Typography } from "antd";

import type { LayoutContext } from "../../shared/types/OutletContextType.ts";

import styles from "./AboutPage.module.css";

const { Title } = Typography;

const AboutPage = () => {
  const { referenceContainer } = useOutletContext<LayoutContext>();

  return (
    <div className={styles.page} ref={referenceContainer}>
      <Title className={styles.title} level={1}>
        About Page - Coming Soon
      </Title>
      <p>README.md editor will be implemented here.</p>
    </div>
  );
};

export default AboutPage;
