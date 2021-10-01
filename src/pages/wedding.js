import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const pageStyles = {
  color: "#232129",
  paddingLeft: 96,
  paddingRight: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const WeddingPage = () => {
  return (
    <main style={pageStyles}>
      <title>kiwiziti.com | Sam &amp; Matt</title>
        <h1>We're getting married!</h1>
        <b>6/4/2022</b>
        <a href="https://www.pavilionatnicksroad.com/">
          <p>The Pavillion at Nicks Rd, Mebane, NC</p>
        </a>

      <StaticImage src="../images/wedding-hero.jpg" alt="us" />
      <h1>More info coming soon...</h1>
    </main>
  )
}

export default WeddingPage
