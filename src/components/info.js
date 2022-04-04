import * as React from "react";
import KiwiZitiImage from "../images/kiwiziti.min.svg";

const InfoSection = () => {
  return (
    <div className="info-container orange-gradient">
      <div style={{ padding: "1rem" }}>
        <p className="title-text">We&apos;re getting married!</p>
        <p style={{ fontSize: "22px" }}>June 4, 2022 at 4:30 PM</p>
        <a href="https://www.pavilionatnicksroad.com/">
          <p>The Pavillion at Nicks Road</p>
        </a>
        <p>6602 Nicks Rd</p>
        <p>Mebane, NC 27302</p>
      </div>
      <div>
        <KiwiZitiImage style={{ objectPosition: "top" }} />
      </div>
    </div>
  );
};

export default InfoSection;
