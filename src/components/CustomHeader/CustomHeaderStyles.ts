import { createStyles } from "antd-style";

export const useCustomHeaderStyles = createStyles(
  ({ css, prefixCls, token }) => ({
    // Desktop Menu
    desktopMenu: css`
      background: transparent;
      border: none;
      line-height: 1;

      &.${prefixCls}-menu {
        .${prefixCls}-menu-item {
          color: ${token.colorTextSecondary};
          font-size: 16px;
          padding: 8px 0;
          margin: 0 16px;
          border-bottom: none;
          transition: color 0.3s ease;

          &:hover {
            color: ${token.colorText};
            border-bottom: none;
          }

          &.${prefixCls}-menu-item-selected {
            color: ${token.colorPrimary};
            border-bottom: none;

            &::after {
              border-bottom: 2px solid ${token.colorPrimary};
            }
          }
        }
      }
    `,

    // Desktop Navigation
    desktopNav: css`
      display: flex;
      gap: 32px;
      align-items: center;
      @media (max-width: 768px) {
        display: none;
      }
    `,

    drawerTitle: css`
      font-size: 18px;
      color: ${token.colorText};
      font-weight: 500;
    `,

    headerContainer: css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
    `,

    // Header Navigation
    headerNavigation: css`
      background: transparent;
      backdrop-filter: blur(10px);
      border: 1px solid ${token.colorBorder};
      padding: 16px 24px;
      border-top-left-radius: 16px;
      border-top-right-radius: 16px;
    `,

    // Logo
    logo: css`
      font-size: 18px;
      color: ${token.colorText};
      font-weight: 500;
    `,

    // Mobile Drawer
    mobileDrawer: css`
      width: 280px;
    `,

    // Mobile Menu
    mobileMenu: css`
      background: transparent;
      border: none;
      padding: 0;

      &.${prefixCls}-menu {
        .${prefixCls}-menu-item {
          color: ${token.colorTextSecondary};
          font-size: 18px;
          padding: 12px 0;
          margin: 0;
          border-bottom: none;
          transition: color 0.3s ease;
          text-align: left;

          &:hover {
            color: ${token.colorText};
            background: transparent;
            border-bottom: none;
          }

          &.${prefixCls}-menu-item-selected {
            color: ${token.colorPrimary};
            background: transparent;
            border-bottom: none;

            &::after {
              border-bottom: 2px solid ${token.colorPrimary};
            }
          }
        }
      }
    `,

    // Mobile Menu Button
    mobileMenuBtn: css`
      color: ${token.colorPrimary};
      background: none;
      border: none;
      display: none;

      @media (max-width: 768px) {
        display: block;
      }
    `
  })
);
