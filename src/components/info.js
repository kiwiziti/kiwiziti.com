import * as React from "react";
import KiwiZitiImage from "../images/kiwiziti.min.svg";

const InfoSection = () => {
  return (
    <div className="info-container orange-gradient">
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
        <KiwiZitiImage style={{ objectPosition: "top" }} />
      </div>
    </div>
  );
};

export default InfoSection;
