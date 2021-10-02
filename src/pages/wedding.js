import * as React from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import "@fontsource/inter"

const pageStyles = {
  color: "#232129",
  margin: "0 auto",
  width: "90%",
  fontFamily: "Inter",
  maxWidth: "500px",
  backgroundColor: "white",
}

const WeddingPage = () => {
  return (
    <div id="wrapper">
      <Helmet>
        <title>kiwiziti.com | Sam &amp; Matt</title>
        <meta name="theme-color" content="white" />
      </Helmet>
      <main style={pageStyles}>
        <Link to="/">home</Link>
        <h1>We're getting married!</h1>
        <b>6/4/2022</b>
        <a href="https://www.pavilionatnicksroad.com/">
          <p>The Pavillion at Nicks Rd, Mebane, NC</p>
        </a>
        <StaticImage src="../images/wedding-hero.jpg" alt="us" />
        <h1>More info coming soon...</h1>
      </main>
    </div>
  )
}

export default WeddingPage
