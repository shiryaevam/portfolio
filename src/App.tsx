import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { ConfigProvider } from "antd";

import MainLayout from "./components/Layout/MainLayout";
import HomePage from "./pages/Home/HomePage";
import { theme } from "./theme";

import "./App.css";

function App() {
  return (
    <ConfigProvider theme={theme}>
      <Router>
        <Routes>
          <Route element={<MainLayout />} path="/">
            <Route element={<HomePage />} path="/" />
            {/*<Route element={<AboutPage />} path="/about" />*/}
            {/*<Route element={<ProjectsPage />} path="/projects" />*/}
            {/*<Route element={<ContactPage />} path="/contact" />*/}
            {/*<Route element={<NotFoundPage />} path="*" />*/}
          </Route>
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

export default App;
