import * as React from "react"
import {Helmet} from "react-helmet"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}


// data


// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Helmet>
        <meta charSet="utf-8" name="description" content="Is Young Thug in Jail? Get the court status of the Atlanta-based YSL rapper's trial." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Is Young Thug in Jail?</title>
        <link rel="canonical" href="https://isyoungthuginjail.com" />
      </Helmet>
      <title>Is Young Thug in Jail?</title>
      <h1 style={headingStyles}>
        Yes.
      </h1>
    </main>
  )
}

export default IndexPage
