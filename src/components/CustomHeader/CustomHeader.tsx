import { colorsClasses, typographyClasses } from "@styles";
import { useEffect, useState } from "react";
import {
  NavLink,
  type NavLinkRenderProps,
  useLocation
} from "react-router-dom";

import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { Button, Drawer, Menu } from "antd";

import type { ItemType } from "antd/es/menu/interface";

import styles from "./CustomHeader.module.css";

const classNavlinlk = ({ isActive }: NavLinkRenderProps): string =>
  isActive ? colorsClasses.headingForeground : colorsClasses.foreground;

type ClassName = false | null | string | undefined;

const cx = (...classNames: ClassName[]) => classNames.filter(Boolean).join(" ");

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
        <NavLink className={classNavlinlk} to={"/"}>
          _hello
        </NavLink>
      ),
      key: "/"
    },
    {
      label: (
        <NavLink className={classNavlinlk} to={"/about"}>
          _about-me
        </NavLink>
      ),
      key: "/about"
    },
    {
      label: (
        <NavLink className={classNavlinlk} to={"/projects"}>
          _projects
        </NavLink>
      ),
      key: "/projects"
    },
    {
      label: (
        <NavLink className={classNavlinlk} to={"/contact"}>
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
      <Drawer
        styles={{
          body: {
            background: "var(--app-surface, #0f172a)"
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
