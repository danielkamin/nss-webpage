import React from "react"
import Layout from "../components/shared/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import ServicesContact from "../components/ServicesComponents/servicesContact"
import ServicesInfo from "../components/ServicesComponents/servicesInfo"
const MonitoringPage = ({data})=>(
    <Layout>
        <SEO title="Monitoring wizyjny"/>
        <div className="banner">
        <div className="page-title lg-header"><h2>Monitoring Wizyjny</h2></div>
            <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="Technika alarmowa"/>
        </div>
        <div className="services-content">
            <ServicesInfo/>
            <ServicesContact 
            name="Jakub Kamiński" 
            email="jakub.kaminski@nssystemy.pl" 
            phoneNumber="693223039"
            title="Manager DZT"/>
        </div>
    </Layout>
)
export default MonitoringPage;
export const query = graphql`
query {
  placeholderImage: file(relativePath: { eq: "monitoring.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`