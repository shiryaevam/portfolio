import { createStyles } from "antd-style";

export const useMainLayoutStyles = createStyles(({ css, token }) => ({
  // Основной layout
  layout: css`
    height: 100dvh;
    background: transparent;
    padding: 16px;
  `,

  // Main Content
  mainContent: css`
    overflow-y: scroll;
    overflow-x: hidden;
    margin: 0;
    background: transparent;
    border-left: solid 1px ${token.colorBorder};
    border-right: solid 1px ${token.colorBorder};
    /* Скрываем скроллбар для WebKit браузеров (Chrome, Safari, Edge) */
    &::-webkit-scrollbar {
      display: none;
    }

    /* Скрываем скроллбар для Firefox */
    scrollbar-width: none;

    /* Для старых версий IE */
    -ms-overflow-style: none;
  `
}));
