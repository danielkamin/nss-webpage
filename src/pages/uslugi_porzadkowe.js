import React from "react"
import Layout from "../components/shared/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import ServicesContact from "../components/ServicesComponents/servicesContact"
import ServicesInfo from "../components/ServicesComponents/servicesInfo"

const SprzatanieContent = (
  <p>
    <h4>W RAMACH USŁUG PORZĄDKOWYCH</h4>
    <br />
    <b>Proponujemy:</b>
    <ul>
      <li>– sprzątanie powierzchni biurowych</li>
      <li>– sprzątanie powierzchni produkcyjnych i magazynowych</li>
      <li>– obsługa terenów zewnętrznych</li>
      <li>– czyszczenie i akrylowanie posadzek</li>
      <li>– sprzątanie po ukończonych budowach i remontach</li>
      <li>– mycie elewacji, prace na wysokościach</li>
      <li>– zarządzanie nieruchomościami</li>
    </ul>
    <br />
    <b>Obsługujemy:</b>
    <ul>
      <li>– biura</li>
      <li>– zakłady produkcyjne</li>
      <li>– placówki medyczne</li>
      <li>– placówki edukacyjne</li>
      <li>– osiedla mieszkaniowe</li>
      <li>– inne</li>
    </ul>
  </p>
)
const SprzataniePage = ({ data }) => (
  <Layout>
    <SEO title="Usługi porządkowe" />
    <div className="banner">
      <div className="page-title lg-header">
        <h2>Usługi Porządkowo Czystościowe</h2>
      </div>
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        alt="Usługi porządkowo czystościowe"
      />
    </div>
    <div className="services-content">
      <ServicesInfo content={SprzatanieContent} />
      <ServicesContact
        name="Piotr Chmura"
        email="piotr.chmura@nssystemy.pl"
        phoneNumber="792 792 342"
        title="Koordynator UPC"
      />
    </div>
  </Layout>
)
export default SprzataniePage

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
