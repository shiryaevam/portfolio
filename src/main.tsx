import { createRoot } from "react-dom/client";

import { StyleProvider } from "@ant-design/cssinjs";

import App from "./App.tsx";

const container = document.querySelector("#root");
const root = createRoot(container!);

root.render(
  <StyleProvider hashPriority="low" layer>
    <App />
  </StyleProvider>
);
