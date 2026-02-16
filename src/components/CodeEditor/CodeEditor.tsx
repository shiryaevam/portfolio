import neonStyles from "../../styles/neonStyles.module.css";
import React from "react";

import styles from "./CodeEditor.module.css";

interface CodeEditorProperties {
  height?: number | string;
  language?: string;
  readOnly?: boolean;
  value: string;
}

const KEYWORDS = new Set([
  "assert",
  "async",
  "await",
  "break",
  "case",
  "catch",
  "class",
  "clear",
  "console",
  "const",
  "continue",
  "count",
  "countReset",
  "debug",
  "default",
  "dir",
  "dirxml",
  "else",
  "error",
  "export",
  "extends",
  "false",
  "finally",
  "for",
  "from",
  "function",
  "group",
  "groupCollapsed",
  "groupEnd",
  "if",
  "import",
  "Infinity",
  "info",
  "let",
  "log",
  "NaN",
  "new",
  "null",
  "Promise",
  "return",
  "switch",
  "table",
  "this",
  "throw",
  "time",
  "timeEnd",
  "timeLog",
  "timeStamp",
  "trace",
  "true",
  "try",
  "undefined",
  "var",
  "warn",
  "while"
]);

const isIdentifierStart = (character: string) => /[A-Za-z_$]/.test(character);

const isIdentifierPart = (character: string) => /[A-Za-z0-9_$]/.test(character);

const escapeHtml = (text: string) =>
  text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

type ConsumeResult =
  | { handled: false }
  | { handled: true; html: string; nextIndex: number };

const consumeLineComment = (code: string, index: number): ConsumeResult => {
  if (code[index] !== "/" || code[index + 1] !== "/") return { handled: false };

  const length = code.length;
  const start = index;
  let cursor = index + 2;

  while (cursor < length && code[cursor] !== "\n") cursor += 1;

  return {
    handled: true,
    html: `<span class="comment">${code.slice(start, cursor)}</span>`,
    nextIndex: cursor
  };
};

const consumeString = (code: string, index: number): ConsumeResult => {
  const quote = code[index];

  if (quote !== '"' && quote !== "'" && quote !== "`")
    return { handled: false };

  const length = code.length;
  const start = index;
  let cursor = index + 1;

  while (cursor < length) {
    const current = code[cursor]!;

    if (current === "\\") {
      cursor += 2;
      continue;
    }

    cursor += 1;
    if (current === quote) break;
  }

  return {
    handled: true,
    html: `<span class="string">${code.slice(start, cursor)}</span>`,
    nextIndex: cursor
  };
};

const consumeNumber = (code: string, index: number): ConsumeResult => {
  const character = code[index]!;

  if (character < "0" || character > "9") return { handled: false };

  const length = code.length;
  const start = index;
  let cursor = index + 1;

  while (cursor < length) {
    const current = code[cursor]!;

    if ((current >= "0" && current <= "9") || current === ".") {
      cursor += 1;
      continue;
    }

    break;
  }

  return {
    handled: true,
    html: `<span class="number">${code.slice(start, cursor)}</span>`,
    nextIndex: cursor
  };
};

const consumePunctuation = (code: string, index: number): ConsumeResult => {
  const character = code[index]!;

  if (!"{}[]();,.".includes(character)) return { handled: false };

  return {
    handled: true,
    html: `<span class="punctuation">${character}</span>`,
    nextIndex: index + 1
  };
};

const consumeIdentifier = (code: string, index: number): ConsumeResult => {
  const character = code[index]!;

  if (!isIdentifierStart(character)) return { handled: false };

  const length = code.length;
  const start = index;
  let cursor = index + 1;

  while (cursor < length && isIdentifierPart(code[cursor]!)) cursor += 1;

  const identifier = code.slice(start, cursor);

  let lookahead = cursor;

  while (lookahead < length && /\s/.test(code[lookahead]!)) lookahead += 1;
  const isFunction = code[lookahead] === "(";

  if (KEYWORDS.has(identifier)) {
    return {
      handled: true,
      html: `<span class="keyword">${identifier}</span>`,
      nextIndex: cursor
    };
  }

  if (isFunction) {
    return {
      handled: true,
      html: `<span class="function">${identifier}</span>`,
      nextIndex: cursor
    };
  }

  return { handled: true, html: identifier, nextIndex: cursor };
};

const highlightCode = (input: string) => {
  const code = escapeHtml(input);
  let output = "";
  let index = 0;

  while (index < code.length) {
    const commentResult = consumeLineComment(code, index);

    if (commentResult.handled) {
      output += commentResult.html;
      index = commentResult.nextIndex;
      continue;
    }

    const stringResult = consumeString(code, index);

    if (stringResult.handled) {
      output += stringResult.html;
      index = stringResult.nextIndex;
      continue;
    }

    const numberResult = consumeNumber(code, index);

    if (numberResult.handled) {
      output += numberResult.html;
      index = numberResult.nextIndex;
      continue;
    }

    const punctuationResult = consumePunctuation(code, index);

    if (punctuationResult.handled) {
      output += punctuationResult.html;
      index = punctuationResult.nextIndex;
      continue;
    }

    const identifierResult = consumeIdentifier(code, index);

    if (identifierResult.handled) {
      output += identifierResult.html;
      index = identifierResult.nextIndex;
      continue;
    }

    output += code[index]!;
    index += 1;
  }

  return output;
};

const CodeEditor: React.FC<CodeEditorProperties> = ({
  height = "400px",
  value
}) => {
  const rootStyle = { ["--code-editor-height" as string]: height } as
    | React.CSSProperties
    | undefined;

  return (
    <div
      className={`${neonStyles.codeEditorStyle} ${styles.root}`}
      style={rootStyle}
    >
      <pre className={styles.pre}>
        <code
          dangerouslySetInnerHTML={{
            __html: highlightCode(value)
          }}
          className={styles.code}
        />
      </pre>
    </div>
  );
};

export default CodeEditor;
