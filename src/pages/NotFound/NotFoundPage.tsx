import { useOutletContext } from "react-router-dom";

import { Typography } from "antd";

import type { LayoutContext } from "../../shared/types/OutletContextType.ts";

import styles from "./NotFoundPage.module.css";

const { Title } = Typography;

const NotFoundPage = () => {
  const { referenceContainer } = useOutletContext<LayoutContext>();

  return (
    <div className={styles.page} ref={referenceContainer}>
      <Title className={styles.code404} level={1}>
        404
      </Title>
      <Title className={styles.subtitle} level={2}>
        Page Not Found
      </Title>
    </div>
  );
};

export default NotFoundPage;
