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
      <b>Can you make it?</b>
      <div>
        <StaticImage style={{ width: 100 }} src="../images/rsvp.jpeg" />
      </div>
    </a>
  );
};

export default RsvpSection;
