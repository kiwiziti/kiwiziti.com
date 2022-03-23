import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const RsvpSection = () => {
  return (
    <a
      className="registry-container rsvp-button"
      href="https://www.zola.com/wedding/mattandsamanthajune4/rsvp"
      target="_blank"
      rel="noreferrer"
    >
      <div>
        <b style={{ zIndex: 1 }}>Can you make it?</b>
        <p id="rsvp-text">RSVP</p>
      </div>
      <StaticImage
        style={{
          zIndex: -1,
          position: "absolute",
          maxWidth: "30%",
          right: "20px",
          bottom: 0,
        }}
        src="../images/eucalyptus-background-small.png"
      />
    </a>
  );
};

export default RsvpSection;
