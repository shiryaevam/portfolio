import { useOutletContext } from "react-router-dom";

import { Flex } from "antd";

import type { LayoutContext } from "../../shared/types/OutletContextType.ts";

import styles from "./HomePage.module.css";

import BackgroundBlurs from "./BackgroundBlurs.svg";

export const HomePage = () => {
  const { referenceContainer } = useOutletContext<LayoutContext>();

  return (
    <Flex
      align={"center"}
      className={styles.wrapper}
      justify={"center"}
      ref={referenceContainer}
      vertical
    >
      <div className={styles.container}>
        <Flex
          align={"start"}
          className={styles.introductionContainer}
          justify={"space-between"}
          vertical
        >
          <div>
            <span className={styles.textForeground}>Hi all. I am</span>

            <h2 className={styles.textHeading}>Shiryaev Aleksey</h2>
            <h6 className={styles.jobTitle}>{">"} Front-end developer</h6>
          </div>
          <div>
            <p className={styles.textForeground}>
              {"//"} find my profile on Github:
            </p>
            <pre className={styles.inlineCode}>
              <span className="keyword">const</span>
              <span className="link"> githubLink </span>
              <span className="punctuation">=</span>
              <span> </span>
              <a
                href="https://github.com/shiryaevam"
                rel="noreferrer"
                target={"_blank"}
              >
                <span className={styles.textLink}>
                  &#34;https://github.com/shiryaevam&#34;
                </span>
              </a>
            </pre>
          </div>
        </Flex>
      </div>
      <BackgroundBlurs className={styles.backgroundSvg} />
    </Flex>
  );
};
