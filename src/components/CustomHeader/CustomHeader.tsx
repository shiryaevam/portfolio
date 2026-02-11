import { colorsClasses, typographyClasses } from "@styles";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

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
  const { cx, styles } = useCustomHeaderStyles();

  const menuItems: ItemType[] = [
    {
      label: "# navigate:",
      key: "navigate",
      onClick: () => {}
    },
    {
      label: <Link to={"/"}>_hello</Link>,
      key: "/"
    },
    {
      label: <Link to={"/about"}>_about-me</Link>,
      key: "/about"
    },
    {
      label: <Link to={"/projects"}>_projects</Link>,
      key: "/projects"
    },
    {
      label: <Link to={"/contact"}>_contact-me</Link>,
      key: "/contact"
    }
  ];

  const handleMenuClick = () => {
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
              onClick={handleMenuClick}
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
            },
            wrapper: {
              width: "100%"
            }
          }}
          classNames={{ body: styles.mobileDrawerBody }}
          getContainer={container}
          onClose={() => setMobileMenuVisible(false)}
          open={mobileMenuVisible}
          placement="right"
          rootClassName={styles.mobileDrawerRoot}
        >
          <Menu
            className={styles.mobileMenu}
            items={menuItems}
            mode="vertical"
            onClick={handleMenuClick}
            selectedKeys={[location.pathname]}
          />
        </Drawer>
      )}
    </>
  );
};
