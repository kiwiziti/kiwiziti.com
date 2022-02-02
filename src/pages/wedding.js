import * as React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";
import InfoSection from "../components/info";
import "@fontsource/inter/variable.css";

const text = {
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  textAlign: "center",
};

const pageStyles = {
  color: "#232129",
  margin: "0 auto",
  width: "90%",
  fontFamily: "InterVariable",
  maxWidth: "500px",
  backgroundColor: "white",
};

const WeddingPage = () => {
  return (
    <div id="wrapper">
      <Helmet>
        <title>kiwiziti.com | Sam &amp; Matt</title>
        <meta name="theme-color" content="white" />
      </Helmet>
      <main style={pageStyles}>
        <Link to="/" style={text}>
          home
        </Link>
        <h1>We&apos;re getting married!</h1>
        <StaticImage src="../images/wedding-hero.jpg" alt="us" />
        <InfoSection />
      </main>
    </div>
  );
};

export default WeddingPage;
