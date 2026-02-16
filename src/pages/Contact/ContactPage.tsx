import React from "react";
import { useOutletContext } from "react-router-dom";

import CodeEditor from "@components/CodeEditor/CodeEditor";
import { Typography } from "antd";

import type { LayoutContext } from "../../shared/types/OutletContextType.ts";

const { Title } = Typography;

const sampleCode = `// Contact me via:
const contact = {
  email: "example@email.com",
  linkedin: "linkedin.com/in/shiryaevam",
  github: "github.com/shiryaevam"
};

console.log("Feel free to reach out!");`;

const ContactPage: React.FC = () => {
  const { referenceContainer } = useOutletContext<LayoutContext>();

  return (
    <div
      ref={referenceContainer}
      style={{ padding: "24px", position: "relative" }}
    >
      <Title level={1} style={{ color: "#00ff88" }}>
        Contact Page - Coming Soon
      </Title>
      <p>Contact form and code editor will be implemented here.</p>

      <div style={{ marginTop: "24px" }}>
        <Title level={3} style={{ color: "#2dd4bf" }}>
          CodeEditor Component Test
        </Title>
        <CodeEditor height="300px" value={sampleCode} />
      </div>
    </div>
  );
};

export default ContactPage;
