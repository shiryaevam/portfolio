import { createRoot } from "react-dom/client";
import "@ant-design/v5-patch-for-react-19";

import App from "./App.tsx";

const container = document.querySelector("#root");
const root = createRoot(container!);

root.render(<App />);
