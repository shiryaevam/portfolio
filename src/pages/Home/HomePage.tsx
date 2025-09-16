import { useNeonStyles } from "../../styles/neonStyles";
import React, { useState } from "react";

import {
  LoadingOutlined,
  PauseCircleOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";
import { Button, Col, Row, Typography } from "antd";

import CodeEditor from "../../components/CodeEditor/CodeEditor";

const { Paragraph, Title } = Typography;

const HomePage: React.FC = () => {
  const [gameState, setGameState] = useState<"idle" | "loading" | "playing">(
    "idle",
  );
  const [progress, setProgress] = useState(0);
  const { styles } = useNeonStyles();

  const handlePlayPause = () => {
    switch (gameState) {
      case "idle": {
        setGameState("playing");
        // Анимация прогресса
        const interval = setInterval(() => {
          setProgress((previous) => {
            if (previous >= 100) {
              clearInterval(interval);
              setGameState("loading");

              return 100;
            }

            return previous + 2;
          });
        }, 100);

        break;
      }
      case "loading": {
        setGameState("idle");
        setProgress(0);

        break;
      }
      case "playing": {
        setGameState("idle");
        setProgress(0);

        break;
      }
      // No default
    }
  };

  const getButtonIcon = () => {
    switch (gameState) {
      case "idle": {
        return <PlayCircleOutlined />;
      }
      case "loading": {
        return <LoadingOutlined />;
      }
      case "playing": {
        return <PauseCircleOutlined />;
      }
      default: {
        return <PlayCircleOutlined />;
      }
    }
  };

  const getButtonText = () => {
    switch (gameState) {
      case "idle": {
        return "P";
      }
      case "loading": {
        return "L";
      }
      case "playing": {
        return "P";
      }
      default: {
        return "P";
      }
    }
  };

  const sampleCode = `// Welcome to Michael Weaver's Portfolio
const developer = {
  name: "Michael Weaver",
  role: "Full Stack Developer",
  skills: ["React", "TypeScript", "Node.js", "Python"],
  experience: "5+ years",
  passion: "Creating amazing digital experiences"
};

// Interactive Portfolio Features
function explorePortfolio() {
  return {
    projects: "Check out my latest work",
    about: "Learn more about my journey", 
    contact: "Let's build something together"
  };
}

// Ready to start?
explorePortfolio();`;

  return (
    <div style={{ padding: "24px", minHeight: "100vh" }}>
      <Row gutter={[24, 24]} style={{ minHeight: "80vh" }}>
        {/* Left Column - Interactive Game Interface */}
        <Col lg={12} xs={24}>
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              animation: "slideInLeft 0.8s ease-out",
            }}
          >
            <Title
              style={{
                fontSize: "4rem",
                marginBottom: "2rem",
                textAlign: "center",
              }}
              className={styles.neonText}
              level={1}
            >
              Michael Weaver
            </Title>

            {/* Interactive Game Interface */}
            <div
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
              style={{
                padding: "2rem",
                textAlign: "center",
                marginBottom: "2rem",
                transition: "transform 0.3s ease",
              }}
              className={styles.gameInterface}
            >
              <Title
                level={3}
                style={{ color: "#e5e5e5", marginBottom: "2rem" }}
              >
                Interactive Portfolio
              </Title>

              {/* Game Button */}
              <div style={{ marginBottom: "2rem" }}>
                <Button
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    fontSize: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                  }}
                  className={styles.neonButton}
                  icon={getButtonIcon()}
                  onClick={handlePlayPause}
                  size="large"
                  type="primary"
                >
                  {getButtonText()}
                </Button>
              </div>

              {/* Progress Bar */}
              {(gameState === "playing" || gameState === "loading") && (
                <div style={{ animation: "fadeIn 0.3s ease-out" }}>
                  <div
                    className={styles.gameProgressBar}
                    style={{ marginBottom: "1rem" }}
                  >
                    <div
                      style={{
                        width: `${progress}%`,
                        height: "100%",
                        background:
                          "linear-gradient(90deg, #00ff88 0%, #8b5cf6 100%)",
                        borderRadius: "20px",
                        transition: "width 0.1s ease",
                      }}
                    />
                  </div>
                  <Paragraph style={{ color: "#a3a3a3", margin: 0 }}>
                    {gameState === "playing" ? "Loading..." : "Complete!"}
                  </Paragraph>
                </div>
              )}
            </div>

            <Paragraph
              style={{
                color: "#a3a3a3",
                fontSize: "1.1rem",
                textAlign: "center",
                maxWidth: "400px",
                margin: "0 auto",
              }}
            >
              Full Stack Developer passionate about creating innovative digital
              experiences
            </Paragraph>
          </div>
        </Col>

        {/* Right Column - Code Editor */}
        <Col lg={12} xs={24}>
          <div
            style={{
              height: "100%",
            }}
          >
            <Title level={3} style={{ color: "#8b5cf6", marginBottom: "1rem" }}>
              Code Editor
            </Title>
            <div className={styles.codeEditorStyle} style={{ height: "500px" }}>
              <CodeEditor
                height="100%"
                language="javascript"
                readOnly={true}
                value={sampleCode}
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
