import { createStyles } from "antd-style";

export const useMainLayoutStyles = createStyles(
  ({ css, prefixCls, token }) => ({
    // // Стили для кнопок в стиле кода
    // codeButton: css`
    //   background: none;
    //   border: 1px solid ${colors.slate[700]};
    //   color: ${colors.slate[200]};
    //   font-family: "Fira Code", "Courier New", monospace;
    //   font-size: 14px;
    //   padding: 8px 16px;
    //   cursor: pointer;
    //   transition: all 0.3s ease;
    //   border-radius: 4px;

    //   &:hover {
    //     border-color: ${colors.teal[400]};
    //     color: ${colors.teal[400]};
    //     box-shadow: 0 0 10px rgba(45, 212, 191, 0.3);
    //   }

    //   &:active {
    //     transform: translateY(1px);
    //   }
    // `,

    // codeComment: css`
    //   color: ${colors.slate[500]};
    //   font-style: italic;
    // `,

    // codeKeyword: css`
    //   color: ${colors.purple[400]};
    //   font-weight: 500;
    // `,

    // codeOperator: css`
    //   color: ${colors.slate[200]};
    // `,

    // codePunctuation: css`
    //   color: ${colors.slate[400]};
    // `,

    // codeString: css`
    //   color: ${colors.info[400]};
    // `,

    // // Стили для кода и синтаксической подсветки
    // codeSyntax: css`
    //   font-family: "Fira Code", "Courier New", monospace;
    //   font-size: 14px;
    //   line-height: 1.6;
    // `,

    // codeVariable: css`
    //   color: ${colors.teal[400]};
    // `,

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
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      background: ${token.colorBgContainer};
      backdrop-filter: blur(10px);
      border-bottom: 1px solid ${token.colorBorder};
      padding: 16px 24px;
    `,

    // Основной layout
    layout: css`
      min-height: 100vh;
      background: transparent;
    `,

    // Logo
    logo: css`
      font-size: 18px;
      color: ${token.colorText};
      font-weight: 500;
    `,

    // Main Content
    mainContent: css`
      margin: 0;
      padding: 0;
      background: transparent;
      min-height: 100vh;
      padding-top: 80px; /* Account for fixed header */
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

    // // Стили для навигации
    // navItem: css`
    //   position: relative;
    //   transition: color 0.3s ease;

    //   &::before {
    //     content: "";
    //     position: absolute;
    //     bottom: -2px;
    //     left: 0;
    //     width: 0;
    //     height: 2px;
    //     background: ${colors.teal[400]};
    //     transition: width 0.3s ease;
    //   }

    //   &:hover::before,
    //   &.active::before {
    //     width: 100%;
    //   }
    // `,

    // // Responsive styles
    // responsiveDesktopNav: css`
    //   @media (max-width: 768px) {
    //     display: none !important;
    //   }
    // `,
  })
);
