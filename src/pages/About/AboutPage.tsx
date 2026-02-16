import { useOutletContext } from "react-router-dom";

import { Typography } from "antd";

import type { LayoutContext } from "../../shared/types/OutletContextType.ts";

const { Title } = Typography;

const AboutPage = () => {
  const { referenceContainer } = useOutletContext<LayoutContext>();

  return (
    <div
      ref={referenceContainer}
      style={{ padding: "24px", position: "relative" }}
    >
      <Title level={1} style={{ color: "#00ff88" }}>
        About Page - Coming Soon
      </Title>
      <p>README.md editor will be implemented here.</p>
    </div>
  );
};

export default AboutPage;
