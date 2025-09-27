import { colors } from "@styles";
import { createStyles } from "antd-style";

export const useHomePageStyles = createStyles(({ css }) => ({
  container: css`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 2;
  `,
  inlineCode: css`
    margin: 0;
    padding: 0;
    white-space: pre-wrap;
    word-wrap: break-word;

    & .keyword {
      color: ${colors.indigo[500]};
    }

    & .link {
      color: ${colors.teal[400]};
    }

    & .punctuation {
      color: #94a3b8;
    }
  `,
  introductionContainer: css`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 70%;
    height: 50%;
    transform: translate(-50%, -50%);
  `,
  jobTitle: css`
    color: ${colors.indigo[500]};
  `,
  wrapper: css`
    position: relative;
    height: 100%;
    overflow: hidden;
    svg {
      position: absolute;
      top: 0;
      left: 0;
      width: 120dvw;
      height: 110dvh;
      z-index: 1;
    }
  `
}));
