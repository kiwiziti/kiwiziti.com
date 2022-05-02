import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const RegistrySection = () => {
  return (
    <a
      className="registry-container button"
      href="https://www.zola.com/registry/mattandsamanthajune4"
      target="_blank"
      rel="noreferrer"
    >
      <p style={{ fontSize: 32, margin: 15 }}>Registry</p>
      <StaticImage
        style={{
          maxWidth: "30%",
          alignSelf: "center",
          marginBottom: 15,
        }}
        src="../images/zola-icon.png"
      />
    </a>
  );
};

export default RegistrySection;
