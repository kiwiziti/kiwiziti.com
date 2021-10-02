import * as React from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"
import KiwiZitiImage from '../images/kiwiziti.min.svg';
import "@fontsource/inter/variable.css"

const text = {
  width: "100%",
  height: "100%",
  textAlign: "center",
}

const image = {
  width: "100%",
  maxWidth: "500px",
}


const pageStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "#232129",
  fontFamily: "InterVariable",
  backgroundColor: "white",
}

const IndexPage = () => {
  return (
    <div id="wrapper">
      <Helmet>
        <title>kiwiziti.com | Sam &amp; Matt</title>
        <meta name="theme-color" content="white" />
      </Helmet>
      <main style={pageStyles}>
        <Link style={text} to="/wedding">/wedding</Link>
        <KiwiZitiImage style={image}/>
        <h2 style={text}>kiwi | ziti</h2>
        <h1 style={text}>things samantha and matt host</h1>
      </main>
    </div>
  )
}

export default IndexPage
