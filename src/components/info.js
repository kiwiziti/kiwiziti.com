import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const InfoSection = () => {
  return (
    <div className="info-container">
      <p className="title-text">We&apos;re getting married!</p>
      <div>
        <b>When</b>
        <p>Saturday, June 4th, 2022</p>
        <b>Where</b>
        <a href="https://www.pavilionatnicksroad.com/">
          <p>The Pavillion at Nicks Rd, Mebane, NC</p>
        </a>
        <p>6602 Nicks Rd, Mebane, NC 27302</p>
      </div>
      <div>
        <StaticImage
          imgStyle={{ objectPosition: "top" }}
          className="kiwi-ziti-icon"
          src="../images/kiwiziti.min.svg"
          alt="us"
        />
      </div>
    </div>
  );
};

export default InfoSection;
