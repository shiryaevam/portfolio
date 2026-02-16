import { useRef } from "react";
import { Outlet } from "react-router-dom";

import { CustomHeader } from "@components/CustomHeader/CustomHeader.tsx";
import { Footer } from "@components/Footer";
import { Layout } from "antd";

import styles from "./MainLayout.module.css";

const { Content } = Layout;

export const MainLayout = () => {
  const referenceContainer = useRef<HTMLDivElement | null>(null);

  return (
    <Layout className={styles.layout}>
      <CustomHeader containerRef={referenceContainer} />
      <Content className={styles.mainContent}>
        <Outlet context={{ referenceContainer }} />
      </Content>
      <Footer />
    </Layout>
  );
};
