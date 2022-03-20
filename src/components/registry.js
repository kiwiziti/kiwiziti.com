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
      <b>Registered at</b>
      <div>
        <StaticImage src="../images/zola-logo.png" />
      </div>
    </a>
  );
};

export default RegistrySection;
