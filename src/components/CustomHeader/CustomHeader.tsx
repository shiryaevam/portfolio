import { colorsClasses } from "../../styles/theme.ts";
import { typographyClasses } from "@styles";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { Button, Drawer, Menu } from "antd";

import type { ItemType } from "antd/es/menu/interface";

import { useCustomHeaderStyles } from "./CustomHeaderStyles";

export const CustomHeader = ({
  container
}: {
  container: HTMLElement | null;
}) => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { cx, styles } = useCustomHeaderStyles();

  const menuItems: ItemType[] = [
    {
      label: "_hello",
      key: "/"
    },
    {
      label: "_about-me",
      key: "/about"
    },
    {
      label: "_projects",
      key: "/projects"
    },
    {
      label: "_contact-me",
      key: "/contact"
    }
  ];

  const handleMenuClick = (key: string) => {
    navigate(key);
    setMobileMenuVisible(false);
  };

  return (
    <>
      {/* CustomHeader Navigation */}
      <div className={styles.headerNavigation}>
        <div className={styles.headerContainer}>
          {/* Logo */}
          <div
            className={cx(
              typographyClasses.bodyMedium,
              colorsClasses.foreground
            )}
          >
            aleksey-shiryaev
          </div>

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

          {/* Mobile Menu Button */}
          <Button
            className={styles.mobileMenuBtn}
            icon={mobileMenuVisible ? <CloseOutlined /> : <MenuOutlined />}
            onClick={() => setMobileMenuVisible((previous) => !previous)}
            type="text"
          />
        </div>
      </div>

      {/* Mobile Drawer */}
      {container && (
        <Drawer
          styles={{
            body: {
              background: "linear-gradient(180deg, #0f172a 0%, #020617 100%)"
            },
            header: {
              display: "none"
            }
          }}
          getContainer={container}
          onClose={() => setMobileMenuVisible(false)}
          open={mobileMenuVisible}
          placement="right"
          rootClassName={styles.mobileDrawer}
        >
          <Menu
            className={styles.mobileMenu}
            items={menuItems}
            mode="vertical"
            onClick={({ key }) => handleMenuClick(key)}
            selectedKeys={[location.pathname]}
          />
        </Drawer>
      )}
    </>
  );
};
