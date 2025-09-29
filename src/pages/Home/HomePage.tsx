import { colorsClasses } from "../../styles/theme.ts";
import { typographyClasses } from "@styles";
import { useOutletContext } from "react-router-dom";

import { Flex } from "antd";

import type { LayoutContext } from "../../shared/types/OutletContextType.ts";

import { useHomePageStyles } from "./HomePageStyles";

import BackgroundBlurs from "./BackgroundBlurs.svg";

export const HomePage = () => {
  const { cx, styles } = useHomePageStyles();
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
            <span
              className={cx(
                typographyClasses.bodyLarge,
                colorsClasses.foreground
              )}
            >
              Hi all. I am
            </span>

            <h2>Shiryaev Aleksey</h2>
            <h6 className={styles.jobTitle}>{">"} Front-end developer</h6>
          </div>
          <div>
            <p
              className={cx(
                colorsClasses.foreground,
                typographyClasses.bodySmall
              )}
            >
              {"//"} find my profile on Github:
            </p>
            <pre
              className={cx(
                styles.inlineCode,
                typographyClasses.bodySmall,
                colorsClasses.headingForeground
              )}
            >
              <span className="keyword">const</span>
              <span className="link"> githubLink </span>
              <span className="punctuation">=</span>
              <span> </span>
              <a
                href="https://github.com/shiryaevam"
                rel="noreferrer"
                target={"_blank"}
              >
                <span className={colorsClasses.linkForeground}>
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
