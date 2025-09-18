import { createStyles } from "antd-style";

export const useNeonStyles = createStyles(({ css, token }) => ({
  // CSS Анимации
  slideInLeft: css`
    animation: slideInLeft 0.8s ease-out;

    @keyframes slideInLeft {
      from {
        opacity: 0;
        transform: translateX(-50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  `,

  slideInRight: css`
    animation: slideInRight 0.8s ease-out 0.2s both;

    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  `,

  // Синий неоновый эффект
  blueNeon: css`
    color: #3b82f6;
    text-shadow:
      0 0 5px rgba(59, 130, 246, 0.5),
      0 0 10px rgba(59, 130, 246, 0.3),
      0 0 15px rgba(59, 130, 246, 0.1);
  `,

  // Код-редактор стиль
  codeEditorStyle: css`
    background: #0d1117;
    border: 1px solid #30363d;
    border-radius: ${token.borderRadius}px;
    overflow: hidden;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 32px;
      background: linear-gradient(90deg, #21262d 0%, #30363d 100%);
      border-bottom: 1px solid #30363d;
      z-index: 1;
    }

    &::after {
      content: "● ● ●";
      position: absolute;
      top: 8px;
      left: 16px;
      color: #7d8590;
      font-size: 12px;
      z-index: 2;
    }

    pre {
      margin-top: 32px !important;
      padding: 16px !important;
    }
  `,

  fadeIn: css`
    animation: fadeIn 0.3s ease-out;

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `,

  // Игровой интерфейс
  gameInterface: css`
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
    border: 2px solid ${token.colorPrimary};
    border-radius: ${token.borderRadiusLG}px;
    padding: 24px;
    position: relative;
    box-shadow:
      0 0 20px rgba(0, 255, 136, 0.2),
      inset 0 0 20px rgba(0, 255, 136, 0.05);

    &::before {
      content: "";
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: linear-gradient(45deg, #00ff88, #8b5cf6, #3b82f6, #00ff88);
      border-radius: ${token.borderRadiusLG}px;
      z-index: -1;
      animation: borderGlow 3s linear infinite;
    }

    @keyframes borderGlow {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  `,

  // Прогресс-бар в стиле дизайна
  gameProgressBar: css`
    background: #1a1a1a;
    border: 1px solid ${token.colorPrimary};
    border-radius: 20px;
    height: 8px;
    overflow: hidden;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      background: linear-gradient(90deg, #00ff88 0%, #8b5cf6 100%);
      border-radius: 20px;
      box-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
      animation: progressGlow 2s ease-in-out infinite alternate;
    }

    @keyframes progressGlow {
      0% {
        box-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
      }
      100% {
        box-shadow: 0 0 20px rgba(0, 255, 136, 0.8);
      }
    }
  `,

  // Градиентный фон
  // gradientBackground: css`
  //   background: linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #0a0a0a 100%);
  //   position: relative;
  //
  //   &::before {
  //     content: "";
  //     position: absolute;
  //     top: 0;
  //     left: 0;
  //     right: 0;
  //     bottom: 0;
  //     background:
  //       radial-gradient(
  //         circle at 20% 80%,
  //         rgba(0, 255, 136, 0.1) 0%,
  //         transparent 50%
  //       ),
  //       radial-gradient(
  //         circle at 80% 20%,
  //         rgba(139, 92, 246, 0.1) 0%,
  //         transparent 50%
  //       );
  //     pointer-events: none;
  //   }
  // `,

  hoverScale: css`
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.02);
    }
  `,

  // Мобильное меню
  mobileMenu: css`
    background: rgba(17, 17, 17, 0.95);
    backdrop-filter: blur(10px);
    border: 1px solid ${token.colorBorder};
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  `,

  // Неоновые кнопки
  neonButton: css`
    position: relative;
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
    border: 1px solid ${token.colorPrimary};
    color: ${token.colorPrimary};
    box-shadow:
      0 0 10px rgba(0, 255, 136, 0.3),
      inset 0 0 10px rgba(0, 255, 136, 0.1);
    transition: all 0.3s ease;

    &:hover {
      box-shadow:
        0 0 20px rgba(0, 255, 136, 0.5),
        inset 0 0 20px rgba(0, 255, 136, 0.2);
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
    }
  `,

  // Неоновые карточки
  neonCard: css`
    background: linear-gradient(135deg, #111111 0%, #1a1a1a 100%);
    border: 1px solid ${token.colorBorder};
    box-shadow:
      0 4px 12px rgba(0, 0, 0, 0.3),
      0 0 0 1px rgba(0, 255, 136, 0.1);
    transition: all 0.3s ease;

    &:hover {
      border-color: ${token.colorPrimary};
      box-shadow:
        0 8px 24px rgba(0, 0, 0, 0.4),
        0 0 0 1px rgba(0, 255, 136, 0.3);
      transform: translateY(-4px);
    }
  `,

  // Неоновый текст
  neonText: css`
    color: ${token.colorPrimary};
    text-shadow:
      0 0 5px rgba(0, 255, 136, 0.5),
      0 0 10px rgba(0, 255, 136, 0.3),
      0 0 15px rgba(0, 255, 136, 0.1);
  `,

  // Пульсирующий эффект для неоновых элементов
  pulse: css`
    animation: pulse 2s ease-in-out infinite;

    @keyframes pulse {
      0%,
      100% {
        box-shadow:
          0 0 10px rgba(0, 255, 136, 0.3),
          inset 0 0 10px rgba(0, 255, 136, 0.1);
      }
      50% {
        box-shadow:
          0 0 20px rgba(0, 255, 136, 0.5),
          inset 0 0 20px rgba(0, 255, 136, 0.2);
      }
    }
  `,

  // Фиолетовый неоновый эффект
  purpleNeon: css`
    color: #8b5cf6;
    text-shadow:
      0 0 5px rgba(139, 92, 246, 0.5),
      0 0 10px rgba(139, 92, 246, 0.3),
      0 0 15px rgba(139, 92, 246, 0.1);
  `,
}));
