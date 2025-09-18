import { Outlet } from "react-router-dom";

import { CustomHeader } from "@/components/CustomHeader/CustomHeader.tsx";
import { Footer } from "@/components/Footer";
import { Layout } from "antd";

import { useMainLayoutStyles } from "./MainLayoutStyles";

const { Content } = Layout;

export const MainLayout = () => {
  const { styles } = useMainLayoutStyles();

  return (
    <Layout className={styles.layout}>
      <CustomHeader />
      <Content className={styles.mainContent}>
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  );
};

