import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";

import { CustomHeader } from "@components/CustomHeader/CustomHeader.tsx";
import { Footer } from "@components/Footer";
import { Layout } from "antd";

import { useMainLayoutStyles } from "./MainLayoutStyles.ts";

const { Content } = Layout;

export const MainLayout = () => {
  const { styles } = useMainLayoutStyles();
  const referenceContainer = useRef<HTMLDivElement | null>(null);
  const [containerElement, setContainerElement] = useState<HTMLElement | null>(
    null
  );

  useEffect(() => {
    if (referenceContainer.current) {
      setContainerElement(referenceContainer.current);
    }
  }, []);

  return (
    <Layout className={styles.layout}>
      <CustomHeader container={containerElement} />
      <Content className={styles.mainContent}>
        <Outlet context={{ referenceContainer }} />
      </Content>
      <Footer />
    </Layout>
  );
};
