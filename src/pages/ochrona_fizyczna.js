import React from "react"
import Layout from "../components/shared/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import ServicesContact from "../components/ServicesComponents/servicesContact"
import ServicesInfo from "../components/ServicesComponents/servicesInfo"

const OchronaContent =(
  <p>
    <h4>W RAMACH OCHRONY FIZYCZNEJ</h4><br/>
    <b>Proponujemy:</b>
    <ul>
      <li>– ochronę fizyczną obiektów</li>
      <li>– obsługę recepcji</li>
      <li>– ochronę fizyczną poprzez mobilne zestawy monitoringu TV</li>
    </ul><br/>
    <b>Zapewniamy:</b>
    <ul>
      <li>– prace pod stałym nadzorem Centrum NS</li>
      <li>– łączność radiową w wydzielonym paśmie</li>
      <li>– dowolne godziny pracy</li>
      <li>– wykwalifikowanych pracowników</li>
      <li>– jednolite umundurowanie</li>
    </ul><br/>
    <b>Obsługujemy:</b>
    <ul>
      <li>– firmy</li>
      <li>– zakłady produkcyjne</li>
      <li>– osiedla mieszkaniowe</li>
      <li>– place budów</li>
    </ul>
  </p>
)

const OchronaPage = ({data})=>(
    <Layout>
        <SEO title="Ochrona Fizyczna"/>
        <div className="banner">
        <div className="page-title lg-header"><h2>Ochrona Fizyczna</h2></div>
            <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="Ochrona fizyczna"/>
        </div>
        <div className="services-content">
            <ServicesInfo content={OchronaContent}/>
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