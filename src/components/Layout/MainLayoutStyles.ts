import { createStyles } from "antd-style";

import { colors } from "@/theme.ts";

export const useMainLayoutStyles = createStyles(({ css }) => ({
  slideInLeft: css`
    animation: slideInLeft 0.6s ease-out;

    @keyframes slideInLeft {
      from {
        opacity: 0;
        transform: translateX(-50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  `,

  slideInRight: css`
    animation: slideInRight 0.6s ease-out;

    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  `,

  // Стили для кнопок в стиле кода
  codeButton: css`
    background: none;
    border: 1px solid ${colors.slate[700]};
    color: ${colors.slate[200]};
    font-family: "Fira Code", "Courier New", monospace;
    font-size: 14px;
    padding: 8px 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 4px;

    &:hover {
      border-color: ${colors.teal[400]};
      color: ${colors.teal[400]};
      box-shadow: 0 0 10px rgba(45, 212, 191, 0.3);
    }

    &:active {
      transform: translateY(1px);
    }
  `,

  codeComment: css`
    color: ${colors.slate[500]};
    font-style: italic;
  `,

  codeKeyword: css`
    color: ${colors.purple[400]};
    font-weight: 500;
  `,

  // Стили для ссылок в стиле кода
  codeLink: css`
    color: ${colors.teal[400]};
    text-decoration: none;
    font-family: "Fira Code", "Courier New", monospace;
    transition: color 0.3s ease;

    &:hover {
      color: ${colors.teal[300]};
      text-decoration: underline;
    }
  `,

  codeOperator: css`
    color: ${colors.slate[200]};
  `,

  codePunctuation: css`
    color: ${colors.slate[400]};
  `,

  codeString: css`
    color: ${colors.info[400]};
  `,

  // Стили для кода и синтаксической подсветки
  codeSyntax: css`
    font-family: "Fira Code", "Courier New", monospace;
    font-size: 14px;
    line-height: 1.6;
  `,

  codeVariable: css`
    color: ${colors.teal[400]};
  `,

  // Desktop Menu
  desktopMenu: css`
    background: transparent !important;
    border: none !important;
    line-height: 1 !important;

    .ant-menu-item {
      color: ${colors.slate[400]} !important;
      font-family: "Fira Code", monospace !important;
      font-size: 16px !important;
      padding: 8px 0 !important;
      margin: 0 16px !important;
      border-bottom: none !important;
      transition: color 0.3s ease !important;

      &:hover {
        color: ${colors.slate[200]} !important;
        border-bottom: none !important;
      }

      &.ant-menu-item-selected {
        color: ${colors.teal[400]} !important;
        border-bottom: none !important;

        &::after {
          border-bottom: 2px solid ${colors.teal[400]} !important;
        }
      }
    }
  `,

  // Desktop Navigation
  desktopNav: css`
    display: flex;
    gap: 32px;
    align-items: center;
  `,

  drawerTitle: css`
    font-family: "Fira Code", monospace;
    font-size: 18px;
    color: ${colors.slate[200]};
    font-weight: 500;
  `,

  // Footer
  footer: css`
    background: rgba(15, 23, 42, 0.95);
    backdrop-filter: blur(10px);
    border-top: 1px solid ${colors.slate[700]};
    padding: 24px;
    margin-top: auto;
  `,

  footerContainer: css`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
  `,

  footerText: css`
    font-family: "Fira Code", monospace;
    font-size: 14px;
    color: ${colors.slate[400]};
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
    background: rgba(15, 23, 42, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid ${colors.slate[700]};
    padding: 16px 24px;
  `,

  // Основной layout
  layout: css`
    min-height: 100vh;
    background: transparent;
  `,

  // Logo
  logo: css`
    font-family: "Fira Code", monospace;
    font-size: 18px;
    color: ${colors.slate[200]};
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
    background: transparent !important;
    border: none !important;
    padding: 0 !important;

    .ant-menu-item {
      color: ${colors.slate[400]} !important;
      font-family: "Fira Code", monospace !important;
      font-size: 18px !important;
      padding: 12px 0 !important;
      margin: 0 !important;
      border-bottom: none !important;
      transition: color 0.3s ease !important;
      text-align: left !important;

      &:hover {
        color: ${colors.slate[200]} !important;
        background: transparent !important;
        border-bottom: none !important;
      }

      &.ant-menu-item-selected {
        color: ${colors.teal[400]} !important;
        background: transparent !important;
        border-bottom: none !important;

        &::after {
          border-bottom: 2px solid ${colors.teal[400]} !important;
        }
      }
    }
  `,

  // Mobile Menu Button
  mobileMenuBtn: css`
    color: ${colors.teal[400]};
    background: none;
    border: none;
    display: none;

    @media (max-width: 768px) {
      display: block !important;
    }
  `,

  // Стили для навигации
  navItem: css`
    position: relative;
    transition: color 0.3s ease;

    &::before {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      background: ${colors.teal[400]};
      transition: width 0.3s ease;
    }

    &:hover::before,
    &.active::before {
      width: 100%;
    }
  `,

  // Responsive styles
  responsiveDesktopNav: css`
    @media (max-width: 768px) {
      display: none !important;
    }
  `,

  socialLink: css`
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 4px;
    border: 1px solid ${colors.slate[700]};
    transition: all 0.3s ease;

    &:hover {
      border-color: ${colors.teal[400]};
      box-shadow: 0 0 10px rgba(45, 212, 191, 0.3);
    }
  `,

  socialLinks: css`
    display: flex;
    gap: 16px;
    align-items: center;
  `,
}));
