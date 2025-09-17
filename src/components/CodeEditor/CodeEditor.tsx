import { useNeonStyles } from "../../styles/neonStyles";
import React from "react";

interface CodeEditorProperties {
  height?: number | string;
  language?: string;
  readOnly?: boolean;
  value: string;
}

const CodeEditor: React.FC<CodeEditorProperties> = ({
  height = "400px",
  language = "javascript",
  value,
}) => {
  const { styles } = useNeonStyles();

  // Простая подсветка синтаксиса для JavaScript
  const highlightCode = (code: string) =>
    code
      .replaceAll(/(\/\/.*$)/gm, '<span class="comment">$1</span>')
      .replaceAll(
        // eslint-disable-next-line sonarjs/regex-complexity
        /(\b(const|let|var|function|return|if|else|for|while|switch|case|break|continue|try|catch|finally|throw|new|this|class|extends|import|export|from|default|async|await|Promise|console|log|error|warn|info|debug|assert|clear|count|countReset|dir|dirxml|group|groupCollapsed|groupEnd|table|time|timeEnd|timeLog|timeStamp|trace)\b)/g,
        '<span class="keyword">$1</span>',
      )
      .replaceAll(
        /(\b(true|false|null|undefined|NaN|Infinity)\b)/g,
        '<span class="literal">$1</span>',
      )
      .replaceAll(/(\b\d+(\.\d+)?\b)/g, '<span class="number">$1</span>')
      .replaceAll(
        /(["'`])((?:\\.|(?!\1)[^\\])*?)\1/g,
        '<span class="string">$1$2$1</span>',
      )
      .replaceAll(/(\w+)(\s*)(\()/g, '<span class="function">$1</span>$2$3')
      .replaceAll(
        /(\{|\}|\[|\]|\(|\)|;|,|\.)/g,
        '<span class="punctuation">$1</span>',
      );

  return (
    <div
      style={{
        height,
        fontFamily: "Fira Code, Consolas, Monaco, monospace",
        fontSize: "14px",
        lineHeight: "1.6",
        padding: "16px",
        overflow: "auto",
        position: "relative",
      }}
      className={styles.codeEditorStyle}
    >
      <pre
        style={{
          margin: 0,
          whiteSpace: "pre-wrap",
          wordWrap: "break-word",
          color: "#e5e5e5",
        }}
      >
        <code
          dangerouslySetInnerHTML={{
            __html: highlightCode(value),
          }}
          style={{
            display: "block",
            fontFamily: "inherit",
            fontSize: "inherit",
            lineHeight: "inherit",
          }}
        />
      </pre>

      <style jsx>{`
        :global(.comment) {
          color: #6a9955;
          font-style: italic;
        }
        :global(.keyword) {
          color: #569cd6;
          font-weight: bold;
        }
        :global(.literal) {
          color: #569cd6;
        }
        :global(.number) {
          color: #b5cea8;
        }
        :global(.string) {
          color: #ce9178;
        }
        :global(.function) {
          color: #dcdcaa;
        }
        :global(.punctuation) {
          color: #d4d4d4;
        }
      `}</style>
    </div>
  );
};

export default CodeEditor;
