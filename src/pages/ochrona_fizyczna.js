import React from "react"
import Layout from "../components/shared/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import ServicesContact from "../components/ServicesComponents/servicesContact"
import ServicesInfo from "../components/ServicesComponents/servicesInfo"

const OchronaPage = ({data})=>(
    <Layout>
        <SEO title="Ochrona Fizyczna"/>
        <div className="banner">
        <div className="page-title lg-header"><h2>Ochrona Fizyczna</h2></div>
            <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="Ochrona fizyczna"/>
        </div>
        <div className="services-content">
            <ServicesInfo/>
            <ServicesContact 
            name="Marek Walesiuk" 
            email="marek.walesiuk@nssystemy.pl" 
            phoneNumber="733 414 464"
            title="Koordynator Ochrony"/>
        </div>
    </Layout>
)
export default OchronaPage;

export const query = graphql`
query {
  placeholderImage: file(relativePath: { eq: "ochrona.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`