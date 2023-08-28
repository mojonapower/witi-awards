import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Button,OutlineButton } from "../components/buttons"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/universal.css"
import {H1} from "../components/titles"
import {Card} from "../components/card"
const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <React.Fragment>
    <Button title='asfadf'/>
    <OutlineButton title='asfadf'/>
    <div style={{display:"flex"}}>
      <div>
        <H1>Estamos probando weas</H1>
      </div>
      <div>
        <Card/>
      </div>

    </div>
  </React.Fragment>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
