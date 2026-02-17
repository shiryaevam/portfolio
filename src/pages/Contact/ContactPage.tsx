import { useOutletContext } from "react-router-dom";

import CodeEditor from "@components/CodeEditor/CodeEditor";
import { Typography } from "antd";

import type { LayoutContext } from "../../shared/types/OutletContextType.ts";

import styles from "./ContactPage.module.css";

const { Title } = Typography;

const sampleCode = `// Contact me via:
const contact = {
  email: "example@email.com",
  linkedin: "linkedin.com/in/shiryaevam",
  github: "github.com/shiryaevam"
};

console.log("Feel free to reach out!");`;

const ContactPage = () => {
  const { referenceContainer } = useOutletContext<LayoutContext>();

  return (
    <div className={styles.page} ref={referenceContainer}>
      <Title className={styles.title} level={1}>
        Contact Page - Coming Soon
      </Title>
      <p>Contact form and code editor will be implemented here.</p>

      <div className={styles.section}>
        <Title className={styles.sectionTitle} level={3}>
          CodeEditor Component Test
        </Title>
        <CodeEditor height="300px" value={sampleCode} />
      </div>
    </div>
  );
};

export default ContactPage;
