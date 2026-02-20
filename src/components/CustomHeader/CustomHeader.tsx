import { useEffect, useState } from "react";
import {
  NavLink,
  type NavLinkRenderProps,
  useLocation
} from "react-router-dom";

import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { Button, Drawer, Flex, Menu } from "antd";

import type { ItemType } from "antd/es/menu/interface";

import styles from "./CustomHeader.module.css";

const classNavLink = ({ isActive }: NavLinkRenderProps): string =>
  isActive ? styles.navLinkActive : styles.navLink;

const titlePage: Record<string, string> = {
  "/about": "_about-me",
  "/contact": "_contact-me",
  "/projects": "_projects"
};

export const CustomHeader = ({
  containerRef
}: {
  containerRef: React.RefObject<HTMLElement | null>;
}) => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const location = useLocation();

  // Close mobile menu on route changes (client-side navigation)
  useEffect(() => {
    setMobileMenuVisible(false);
  }, [location.pathname]);

  const menuItems: ItemType[] = [
    {
      label: "# navigate:",
      disabled: true,
      key: "navigate",
      onClick: () => {}
    },
    {
      label: (
        <NavLink className={classNavLink} to={"/"}>
          _hello
        </NavLink>
      ),
      key: "/"
    },
    {
      label: (
        <NavLink className={classNavLink} to={"/about"}>
          _about-me
        </NavLink>
      ),
      key: "/about"
    },
    {
      label: (
        <NavLink className={classNavLink} to={"/projects"}>
          _projects
        </NavLink>
      ),
      key: "/projects"
    },
    {
      label: (
        <NavLink className={classNavLink} to={"/contact"}>
          _contact-me
        </NavLink>
      ),
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
          <div className={styles.logo}>aleksey-shiryaev</div>

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
      {titlePage[location.pathname] && !mobileMenuVisible ? (
        <Flex
          align="center"
          className={styles.mobileTitleContainer}
          justify="start"
        >
          {titlePage[location.pathname]}
        </Flex>
      ) : null}
      {/* Mobile Drawer */}
      <Drawer
        styles={{
          body: {
            background: "var(--theme-background)"
          },
          header: {
            display: "none"
          },
          wrapper: {
            width: "100%"
          }
        }}
        classNames={{ body: styles.mobileDrawerBody }}
        getContainer={() => containerRef.current ?? document.body}
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
    </>
  );
};
