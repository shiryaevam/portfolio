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
    align-items: center;
    padding: 16px 0 16px 24px;
  `,

  socialLink: css`
    font-size: 18px;
    display: flex;
    width: 32px;
    align-items: center;
    height: 100%;
    transition: all 0.3s ease;
    border-left: solid 1px ${colors.slate[700]};

    &:hover {
      border-color: ${colors.teal[400]};
      box-shadow: 0 0 10px rgba(45, 212, 191, 0.3);
    }
    svg {
      align-items: center;
      translate: 60%;
    }
  `,

  socialLinks: css`
    flex-grow: 2;
    height: 100%;
  `
}));
