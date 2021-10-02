import * as React from "react"
import KiwiZitiImage from '../images/kiwiziti.svg';
import "@fontsource/inter"

const center = {
  alignSelf: "center",
}

const image = {
  width: "100%",
  height: "100%",
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
        <h2 style={center}>kiwi | ziti</h2>
        <h1 style={center}>things samantha and matt host</h1>
    </main>
  )
}

export default IndexPage
