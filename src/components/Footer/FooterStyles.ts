import { colors } from "@styles";
import { createStyles } from "antd-style";

export const useFooterStyles = createStyles(({ css }) => ({
  // Footer
  footer: css`
    background: transparent;
    border: 1px solid ${colors.slate[700]};
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    width: 100%;
    height: 56px;
  `,

  footerText: css`
    height: 100%;
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-right: 1px solid ${colors.slate[700]};
  `,

  socialLink: css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 100%;
    transition:
      color 0.2s ease,
      box-shadow 0.2s ease,
      border-color 0.2s ease;
    border-left: 1px solid ${colors.slate[700]};

    &:hover {
      border-color: ${colors.teal[400]};
      box-shadow: 0 0 10px rgba(45, 212, 191, 0.2);
    }

    svg {
      width: 28px;
      height: 28px;
    }
  `,

  socialLinks: css`
    flex: 1 1 auto;
    height: 100%;
    justify-content: flex-end;
  `
}));
