import React from "react"
import Layout from "../components/shared/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import ServicesContact from "../components/ServicesComponents/servicesContact"
import ServicesInfo from "../components/ServicesComponents/servicesInfo"
const SprzataniePage = ({data})=>(
    <Layout>
        <SEO title="Usługi porządkowe"/>
        <div className="banner">
        <div className="page-title lg-header"><h2>Usługi Porządkowo Czystościowe</h2></div>
            <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="Usługi porządkowo czystościowe"/>
        </div>
        <div className="services-content">
            <ServicesInfo/>
            <ServicesContact 
            name="Natalia Reńsko" 
            email="natalia.renko@nssystemy.pl" 
            phoneNumber="792792342"
            title="Koordynator UPC"/>
        </div>
    </Layout>
)
export default SprzataniePage;

export const query = graphql`
query {
  placeholderImage: file(relativePath: { eq: "sprzatanie.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`