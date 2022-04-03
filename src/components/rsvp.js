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
      <div style={{ paddingBottom: 10 }}>
        <b style={{ zIndex: 1 }}>Can you make it?</b>
        <p id="rsvp-text">RSVP</p>
        <StaticImage
          style={{
            zIndex: -1,
            maxWidth: "50%",
            alignSelf: "center",
          }}
          src="../images/eucalyptus-bottom.png"
        />
      </div>
    </a>
  );
};

export default RsvpSection;
