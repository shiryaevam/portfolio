import { typographyClasses } from "../../styles/typography";
import React from "react";

const TypographyExample: React.FC = () => (
  <div style={{ padding: "24px", fontFamily: "'Fira Code', monospace" }}>
    <h1 className={typographyClasses.h1}>Heading 1</h1>
    <h2 className={typographyClasses.h2}>Heading 2</h2>
    <h3 className={typographyClasses.h3}>Heading 3</h3>
    <h4 className={typographyClasses.h4}>Heading 4</h4>
    <h5 className={typographyClasses.h5}>Heading 5</h5>
    <h6 className={typographyClasses.h6}>Heading 6</h6>

    <div style={{ marginTop: "32px" }}>
      <p className={typographyClasses.bodyLarge}>
        Body Large: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <p className={typographyClasses.bodyMedium}>
        Body Medium: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <p className={typographyClasses.bodySmall}>
        Body Small: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>

    <div style={{ marginTop: "32px" }}>
      <div className={typographyClasses.text1}>Text Step 1 (14px)</div>
      <div className={typographyClasses.text2}>Text Step 2 (16px)</div>
      <div className={typographyClasses.text3}>Text Step 3 (18px)</div>
      <div className={typographyClasses.text4}>Text Step 4 (20px)</div>
      <div className={typographyClasses.text5}>Text Step 5 (24px)</div>
      <div className={typographyClasses.text6}>Text Step 6 (30px)</div>
      <div className={typographyClasses.text7}>Text Step 7 (36px)</div>
      <div className={typographyClasses.text8}>Text Step 8 (48px)</div>
      <div className={typographyClasses.text9}>Text Step 9 (60px)</div>
    </div>
  </div>
);

export default TypographyExample;
