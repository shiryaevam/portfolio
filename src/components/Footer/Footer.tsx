import { colorsClasses, typographyClasses } from "@styles";

import { GitIcon, LinkedinIcon } from "@icons";
import { Flex } from "antd";

import { useFooterStyles } from "./FooterStyles";

export const Footer = () => {
  const { cx, styles } = useFooterStyles();

  return (
    <Flex align={"center"} className={styles.footer}>
      <div
        className={cx(
          styles.footerText,
          typographyClasses.bodyMedium,
          colorsClasses.foreground
        )}
      >
        find me in:
      </div>
      <Flex align={"center"} className={styles.socialLinks}>
        <a
          aria-label="LinkedIn"
          title="LinkedIn"
          className={styles.socialLink}
          href="https://linkedin.com/in/shiryaevam"
          rel="noopener noreferrer"
          target="_blank"
        >
          <LinkedinIcon />
        </a>
        <a
          aria-label="GitHub"
          title="GitHub"
          className={styles.socialLink}
          href="https://github.com/shiryaevam"
          rel="noopener noreferrer"
          target="_blank"
        >
          <GitIcon />
        </a>
      </Flex>
    </Flex>
  );
};
