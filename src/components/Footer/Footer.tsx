import {
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

import { useFooterStyles } from "./FooterStyles";

const Footer = () => {
  const { styles } = useFooterStyles();

  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerText}>find me in:</div>
        <div className={styles.socialLinks}>
          <a
            className={`${styles.codeLink} ${styles.socialLink}`}
            href="https://twitter.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <TwitterOutlined />
          </a>
          <a
            className={`${styles.codeLink} ${styles.socialLink}`}
            href="https://linkedin.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <LinkedinOutlined />
          </a>
          <a
            className={`${styles.codeLink} ${styles.socialLink}`}
            href="https://github.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GithubOutlined />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
