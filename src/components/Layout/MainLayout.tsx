import { useNeonStyles } from "../../styles/neonStyles";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  HomeOutlined,
  MailOutlined,
  MenuOutlined,
  ProjectOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Drawer, Layout, Menu } from "antd";

const { Sider, Content } = Layout;

interface MainLayoutProperties {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProperties> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { styles } = useNeonStyles();

  const menuItems = [
    {
      label: "Home",
      icon: <HomeOutlined />,
      key: "/",
    },
    {
      label: "About",
      icon: <UserOutlined />,
      key: "/about",
    },
    {
      label: "Projects",
      icon: <ProjectOutlined />,
      key: "/projects",
    },
    {
      label: "Contact",
      icon: <MailOutlined />,
      key: "/contact",
    },
  ];

  const handleMenuClick = (key: string) => {
    navigate(key);
    setMobileMenuVisible(false);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Desktop Sidebar */}
      <Sider
        width={250}
        style={{
          background: "linear-gradient(180deg, #111111 0%, #0a0a0a 100%)",
          borderRight: "1px solid #333333",
        }}
        className="desktop-sidebar"
        collapsed={collapsed}
        trigger={null}
        collapsible
      >
        <div
          style={{
            padding: "24px 16px",
            textAlign: "center",
            borderBottom: "1px solid #333333",
            marginBottom: "16px",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: collapsed ? "16px" : "24px",
              transition: "all 0.3s ease",
            }}
            className={styles.neonText}
          >
            {collapsed ? "MW" : "Michael Weaver"}
          </h2>
        </div>

        <Menu
          style={{
            background: "transparent",
            border: "none",
          }}
          items={menuItems}
          mode="inline"
          onClick={({ key }) => handleMenuClick(key)}
          selectedKeys={[location.pathname]}
          theme="dark"
        />

        <div
          style={{
            position: "absolute",
            bottom: "24px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "calc(100% - 32px)",
          }}
        >
          <Button
            style={{
              width: "100%",
              color: "#e5e5e5",
              border: "1px solid #333333",
            }}
            className={styles.neonButton}
            onClick={() => setCollapsed(!collapsed)}
            type="text"
          >
            {collapsed ? "→" : "←"}
          </Button>
        </div>
      </Sider>

      {/* Mobile Header */}
      <div
        style={{
          display: "none",
          padding: "16px",
          background: "linear-gradient(180deg, #111111 0%, #0a0a0a 100%)",
          borderBottom: "1px solid #333333",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
        className="mobile-header"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2
            className={styles.neonText}
            style={{ margin: 0, fontSize: "20px" }}
          >
            Michael Weaver
          </h2>
          <Button
            icon={<MenuOutlined />}
            onClick={() => setMobileMenuVisible(true)}
            style={{ color: "#00ff88" }}
            type="text"
          />
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title={
          <h2
            className={styles.neonText}
            style={{ margin: 0, fontSize: "20px" }}
          >
            Navigation
          </h2>
        }
        styles={{
          body: {
            background: "linear-gradient(180deg, #111111 0%, #0a0a0a 100%)",
          },
        }}
        className={styles.mobileMenu}
        onClose={() => setMobileMenuVisible(false)}
        open={mobileMenuVisible}
        placement="right"
      >
        <Menu
          style={{
            background: "transparent",
            border: "none",
          }}
          items={menuItems}
          mode="vertical"
          onClick={({ key }) => handleMenuClick(key)}
          selectedKeys={[location.pathname]}
          theme="dark"
        />
      </Drawer>

      {/* Main Content */}
      <Layout>
        <Content
          style={{
            margin: 0,
            padding: 0,
            background: "transparent",
            minHeight: "100vh",
          }}
        >
          {children}
        </Content>
      </Layout>

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-sidebar {
            display: none !important;
          }
          .mobile-header {
            display: block !important;
          }
        }
        @media (min-width: 769px) {
          .mobile-header {
            display: none !important;
          }
        }
      `}</style>
    </Layout>
  );
};

export default MainLayout;
