import { useNeonStyles } from "./styles/neonStyles";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { ConfigProvider } from "antd";

import MainLayout from "./components/Layout/MainLayout";
import AboutPage from "./pages/About/AboutPage";
import ContactPage from "./pages/Contact/ContactPage";
import HomePage from "./pages/Home/HomePage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import ProjectsPage from "./pages/Projects/ProjectsPage";
import { theme } from "./theme";

import "./App.css";

function App() {
  const { styles } = useNeonStyles();

  return (
    <ConfigProvider theme={theme}>
      <Router>
        <div className={styles.gradientBackground}>
          <MainLayout>
            <Routes>
              <Route element={<HomePage />} path="/" />
              <Route element={<AboutPage />} path="/about" />
              <Route element={<ProjectsPage />} path="/projects" />
              <Route element={<ContactPage />} path="/contact" />
              <Route element={<NotFoundPage />} path="*" />
            </Routes>
          </MainLayout>
        </div>
      </Router>
    </ConfigProvider>
  );
}

export default App;
