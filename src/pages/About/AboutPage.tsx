import { useOutletContext } from "react-router-dom";

import { CustomCollapse } from "@components/CustomCollapse";
import { type CollapseProps, Typography } from "antd";

import type { LayoutContext } from "@shared/types/OutletContextType.ts";

import styles from "./AboutPage.module.css";

const { Text } = Typography;

const items: CollapseProps["items"] = [
  {
    label: "personal-info",
    children: <p>5687</p>,
    key: "1"
  },
  {
    label: "professional-info",
    children: <p>57687</p>,
    key: "2"
  },
  {
    label: "hobbies",
    children: <p>65768798</p>,
    key: "3"
  },
  {
    label: "contacts",
    children: <p>65768798</p>,
    key: "4"
  }
];

const AboutPage = () => {
  const { referenceContainer } = useOutletContext<LayoutContext>();

  return (
    <div className={styles.page} ref={referenceContainer}>
      <CustomCollapse items={items} />
      <div className={styles.personalInfo}>
        <div>
          <Text>
            Senior Frontend Engineer with 7+ years of expertise in building
            scalable, high-performance web applications using React and
            TypeScript. Proven track record in leading technical
            initiatives—from designing low-code platforms that reduce team
            workload by 600+ hours/month to optimizing bundle size by 10x.
            Strong advocate for clean code, performance best practices, and
            collaborative development. Seeking a senior/lead role in a
            product-driven company where I can contribute to architectural
            decisions and mentor teams
          </Text>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
