import { createStyles } from "antd-style";

import { colors } from "@/theme.ts";

export const useFooterStyles = createStyles(({ css }) => ({
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
  `
}));
