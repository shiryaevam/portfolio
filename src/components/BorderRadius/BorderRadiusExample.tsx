import {
  borderRadiusClasses,
  borderRadiusStyles
} from "../../styles/borderRadius";
import React from "react";

const BorderRadiusExample: React.FC = () => (
  <div style={{ padding: "24px", fontFamily: "'Fira Code', monospace" }}>
    <h2 className="h2" style={borderRadiusStyles.card}>
      Border Radius System
    </h2>

    <div style={{ marginTop: "32px" }}>
      <h3 className="h4">Step 1 - Checkboxes (2px)</h3>
      <div style={{ display: "flex", gap: "16px", marginTop: "16px" }}>
        <div
          style={{
            width: "20px",
            height: "20px",
            backgroundColor: "#2dd4bf",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "12px"
          }}
          className={borderRadiusClasses.radius1}
        >
          ✓
        </div>
        <div
          style={{
            width: "20px",
            height: "20px",
            backgroundColor: "#6b7280",
            border: "2px solid #9ca3af"
          }}
          className={borderRadiusClasses.checkbox}
        />
      </div>
    </div>

    <div style={{ marginTop: "32px" }}>
      <h3 className="h4">Step 2 - Icon Boxes (4px)</h3>
      <div style={{ display: "flex", gap: "16px", marginTop: "16px" }}>
        <div
          style={{
            width: "40px",
            height: "40px",
            backgroundColor: "#8b5cf6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "20px"
          }}
          className={borderRadiusClasses.radius2}
        >
          🎨
        </div>
        <div
          style={{
            width: "40px",
            height: "40px",
            backgroundColor: "#6366f1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "20px"
          }}
          className={borderRadiusClasses.iconBox}
        >
          ⚙️
        </div>
      </div>
    </div>

    <div style={{ marginTop: "32px" }}>
      <h3 className="h4">Step 3 - Buttons, Inputs, Backdrop (8px)</h3>
      <div
        style={{
          display: "flex",
          gap: "16px",
          marginTop: "16px",
          flexWrap: "wrap"
        }}
      >
        <button
          style={{
            padding: "8px 16px",
            backgroundColor: "#2dd4bf",
            color: "white",
            border: "none",
            cursor: "pointer"
          }}
          className={borderRadiusClasses.radius3}
        >
          Button
        </button>
        <input
          style={{
            padding: "8px 12px",
            backgroundColor: "#374151",
            color: "white",
            border: "1px solid #6b7280",
            outline: "none"
          }}
          className={borderRadiusClasses.input}
          placeholder="Input field"
        />
        <div
          style={{
            padding: "16px",
            backgroundColor: "#1f2937",
            border: "1px solid #374151"
          }}
          className={borderRadiusClasses.backdrop}
        >
          Backdrop
        </div>
      </div>
    </div>

    <div style={{ marginTop: "32px" }}>
      <h3 className="h4">Step 4 - Cards (16px)</h3>
      <div
        style={{
          display: "flex",
          gap: "16px",
          marginTop: "16px",
          flexWrap: "wrap"
        }}
      >
        <div
          style={{
            padding: "24px",
            backgroundColor: "#1f2937",
            border: "1px solid #374151",
            width: "200px"
          }}
          className={borderRadiusClasses.radius4}
        >
          <h4 className="h5">Card Title</h4>
          <p className="body-medium">This is a card with 16px border radius.</p>
        </div>
        <div
          style={{
            padding: "24px",
            backgroundColor: "#111827",
            border: "1px solid #374151",
            width: "200px"
          }}
          className={borderRadiusClasses.card}
        >
          <h4 className="h5">Another Card</h4>
          <p className="body-medium">
            Consistent border radius across all cards.
          </p>
        </div>
      </div>
    </div>

    <div style={{ marginTop: "32px" }}>
      <h3 className="h4">Nested Elements Example</h3>
      <div
        style={{
          padding: "24px",
          backgroundColor: "#1f2937",
          border: "1px solid #374151",
          marginTop: "16px"
        }}
        className={borderRadiusClasses.backdrop}
      >
        <p className="body-medium" style={{ marginBottom: "16px" }}>
          Backdrop (8px radius)
        </p>
        <div
          style={{
            padding: "16px",
            backgroundColor: "#111827",
            border: "1px solid #374151",
            marginBottom: "12px"
          }}
          className={borderRadiusClasses.card}
        >
          <p className="body-small">Card inside backdrop (16px radius)</p>
        </div>
        <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
          <div
            style={{
              width: "16px",
              height: "16px",
              backgroundColor: "#6b7280"
            }}
            className={borderRadiusClasses.checkbox}
          />
          <div
            style={{
              width: "24px",
              height: "24px",
              backgroundColor: "#8b5cf6"
            }}
            className={borderRadiusClasses.iconBox}
          />
          <button
            style={{
              padding: "4px 8px",
              backgroundColor: "#2dd4bf",
              color: "white",
              border: "none",
              fontSize: "12px"
            }}
            className={borderRadiusClasses.button}
          >
            Button
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default BorderRadiusExample;
