import * as React from "react"
import KiwiZitiImage from '../images/kiwiziti.svg';
import "@fontsource/inter"

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
  fontFamily: "inter",
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>kiwiziti.com | Sam &amp; Matt</title>
        <a href="/wedding">
          <p>/wedding</p>
        </a>
        <KiwiZitiImage style={image}/>
        <h2 style={text}>kiwi | ziti</h2>
        <h1 style={text}>things samantha and matt host</h1>
    </main>
  )
}

export default IndexPage
