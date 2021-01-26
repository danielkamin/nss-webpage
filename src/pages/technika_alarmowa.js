import React from "react"
import Layout from "../components/shared/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import ServicesContact from "../components/ServicesComponents/servicesContact"
import ServicesInfo from "../components/ServicesComponents/servicesInfo"
const TechnikaContent = (
  <p>
    <h4>W RAMACH ZABEZPIECZENIA TECHNICZNEGO</h4><br/>
    <b>Proponujemy projektowanie i wykonanie:</b>
    <ul>
      <li>– systemów alarmowych</li>
      <li>– telewizji przemysłowej</li>
      <li>– kontroli dostępu</li>
      <li>– innych instalacji niskoprądowych</li>
    </ul><br/>
    <b>Zapewniamy:</b>
    <ul>
      <li>– konserwację w/w systemów</li>
      <li>– wysoką jakość użytego sprzętu</li>
      <li>– profesjonalny montaż</li>
      <li>– staranność i dokładność w wykonaniu usługi</li>
    </ul>
  </p>
)

const AlarmyPage = ({data})=>(
    <Layout>
        <SEO title="Technika alarmowa"/>
        <div className="banner">
        <div className="page-title lg-header">
          <h2>Technika alarmowa</h2>
        </div>
          <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="Technika alarmowa" />
        </div>
        <div className="services-content">
            <ServicesInfo content={TechnikaContent}/>
            <ServicesContact 
            name="Jakub Kamiński" 
            email="jakub.kaminski@nssystemy.pl" 
            phoneNumber="693223039"
            title="Manager DZT"/>
        </div>
    </Layout>
)
export default AlarmyPage;

export const query = graphql`
query {
  placeholderImage: file(relativePath: { eq: "technika.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`