import { Flex } from "antd";

import { useHomePageStyles } from "./HomePageStyles";

import BackgroundBlurs from "./BackgroundBlurs.svg";

export const HomePage = () => {
  const { styles } = useHomePageStyles();

  return (
    <Flex align={"center"} justify={"center"} vertical>
      <Flex className={styles.container}>
        <div>Introduction</div>
        <div>link</div>
        <BackgroundBlurs />
      </Flex>
    </Flex>
  );
};
