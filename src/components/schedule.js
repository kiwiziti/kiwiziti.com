import * as React from "react";

const ScheduleSection = () => {
  return (
    <div className="info-container">
      <div style={{ padding: "1rem" }}>
        <p className="title-text">The Details</p>
        <p>
          <span style={{ fontWeight: "bold" }}>Dress code: </span>
          Semi-formal
        </p>
        <p>
          Dress for warm weather (think sundresses, cocktail dresses, slacks and
          jackets in breathable fabrics). Shoes that can handle grass, dirt and
          gravel are a good idea.
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>After the ceremony: </span>
          There will be appetizers (including homemade cheese!), drinks, dinner
          from the delicious{` `}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://mediterraneandeli.com/"
          >
            Mediterranean Deli
          </a>
          , live music from the talented{" "}
          <a href="https://www.teacupgin.com/" target="_blank" rel="noreferrer">
            Teacup Gin
          </a>
          , and dancing!
        </p>
        <p>We can&apos;t wait to see you there!</p>
      </div>
    </div>
  );
};

export default ScheduleSection;
