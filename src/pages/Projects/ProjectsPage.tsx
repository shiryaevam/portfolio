import { Link, useOutletContext } from "react-router-dom";

import { CustomCollapse } from "@components/CustomCollapse";
import { type CollapseProps } from "antd";

import type { LayoutContext } from "@shared/types/OutletContextType.ts";

import styles from "./ProjectsPage.module.css";

const items: CollapseProps["items"] = [
  {
    label: "projects",
    children: <p>тут должна быть фильтрация по стеку проектов</p>,
    key: "1"
  }
];

export const ProjectsPage = () => {
  const { referenceContainer } = useOutletContext<LayoutContext>();

  return (
    <div className={styles.page} ref={referenceContainer}>
      <CustomCollapse items={items} />
      <Link to="/task-test">
        <img
          width={"100%"}
          src={
            "https://habrastorage.org/r/w1560/getpro/habr/upload_files/c27/f2b/892/c27f2b8926fec4a9653966f79af109a4.png"
          }
          alt="Test task"
          className={styles.image}
          height={"100%"}
        />
      </Link>
    </div>
  );
};
