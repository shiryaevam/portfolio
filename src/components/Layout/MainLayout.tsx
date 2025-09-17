import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Drawer, Layout, Menu } from "antd";

import { useMainLayoutStyles } from "./MainLayoutStyles";

const { Content } = Layout;

interface MainLayoutProperties {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProperties> = ({ children }) => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { styles } = useMainLayoutStyles();

  const menuItems = [
    {
      label: "_hello",
      key: "/",
    },
    {
      label: "_about-me",
      key: "/about",
    },
    {
      label: "_projects",
      key: "/projects",
    },
    {
      label: "_contact-me",
      key: "/contact",
    },
  ];

  const handleMenuClick = (key: string) => {
    navigate(key);
    setMobileMenuVisible(false);
  };

  return (
    <Layout className={styles.layout}>
      {/* Header Navigation */}
      <div className={styles.headerNavigation}>
        <div className={styles.headerContainer}>
          {/* Logo */}
          <div className={styles.logo}>michael-weaver</div>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            <Menu
              className={styles.desktopMenu}
              items={menuItems}
              mode="horizontal"
              onClick={({ key }) => handleMenuClick(key)}
              selectedKeys={[location.pathname]}
            />
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title={<div className={styles.drawerTitle}>michael-weaver</div>}
        styles={{
          body: {
            background: "linear-gradient(180deg, #0f172a 0%, #020617 100%)",
            padding: "24px",
          },
          header: {
            background: "linear-gradient(180deg, #0f172a 0%, #020617 100%)",
            borderBottom: "1px solid #334155",
          },
        }}
        className={styles.mobileDrawer}
        onClose={() => setMobileMenuVisible(false)}
        open={mobileMenuVisible}
        placement="right"
      >
        <Menu
          className={styles.mobileMenu}
          items={menuItems}
          mode="vertical"
          onClick={({ key }) => handleMenuClick(key)}
          selectedKeys={[location.pathname]}
        />
      </Drawer>

      {/* Main Content */}
      <Content className={styles.mainContent}>{children}</Content>

      {/* Footer */}
      <div className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerText}>find me in:</div>
          <div className={styles.socialLinks}>
            <a
              className={`${styles.codeLink} ${styles.socialLink}`}
              href="https://twitter.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <TwitterOutlined />
            </a>
            <a
              className={`${styles.codeLink} ${styles.socialLink}`}
              href="https://linkedin.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <LinkedinOutlined />
            </a>
            <a
              className={`${styles.codeLink} ${styles.socialLink}`}
              href="https://github.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <GithubOutlined />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MainLayout;
