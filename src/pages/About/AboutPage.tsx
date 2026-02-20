import { useOutletContext } from "react-router-dom";

import { IconArrow } from "@icons";
import { Collapse, type CollapseProps, Typography } from "antd";

import type { LayoutContext } from "../../shared/types/OutletContextType.ts";

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
      <Collapse
        expandIcon={({ isActive }) =>
          isActive ? <IconArrow style={{ rotate: "270deg" }} /> : <IconArrow />
        }
        styles={{
          body: { border: "none", borderRadius: 0 },
          root: { borderRadius: 0 }
        }}
        items={items}
        accordion
      />
      <div className={styles.personalInfo}>
        <div>
          <Text>
            I have 7 years of experience in web development lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in.
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            officia deserunt mollit anim id est laborum.
          </Text>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
