import * as React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import Gallery from "../components/gallery";
import "@fontsource/inter/variable.css";
import { useGallery } from "../utils/hooks/useGallery";

const text = {
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  textAlign: "center",
};

const pageStyles = {
  color: "#232129",
  fontFamily: "InterVariable",
  backgroundColor: "white",
};

const WeddingPage = () => {
  const images = useGallery();

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
        <Gallery images={images} />
      </main>
    </div>
  );
};

export default WeddingPage;
