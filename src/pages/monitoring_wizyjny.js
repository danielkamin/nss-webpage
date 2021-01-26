import React from "react"
import Layout from "../components/shared/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import ServicesContact from "../components/ServicesComponents/servicesContact"
import ServicesInfo from "../components/ServicesComponents/servicesInfo"
const MonitoringContent =(
  <p>
    <h4>W ZAKRESIE USŁUG MONITORINGU</h4><br/>
  <b>Proponujemy:</b>
  <ul>
    <li>- monitoring sygnałów włamaniowych</li>
    <li>– monitoring video</li>
    <li>– monitoring środowiskowy</li>
    <li>– audyty bezpieczeństwa</li>
  </ul><br/>
  <b>Zapewniamy:</b>
  <ul>
    <li>– profesjonalną całodobową obsługę</li>
    <li>– indywidualny dobór rozwiązań  technicznych w zależności od typu obiektu</li>
    <li>– wysoką jakość</li>
  </ul><br/>
  <h4>W RAMACH OCHRONY MOBILNEJ</h4><br/>
  <b>Proponujemy:</b>
  <ul>
    <li>– dedykowane usługi patrolu interwencyjnego</li>
    <li>– monitoring</li>
    <li>– ochrona fizyczna</li>
    <li>– kontrole prewencyjne zgodnie z harmonogramem</li>
  </ul><br/>
  <b>Zapewniamy:</b>
  <ul>
    <li>– wykwalifikowanych i przeszkolonych pracowników</li>
    <li>– wysoką jakość wykonywanych usług</li>
  </ul>
  </p>
)

const MonitoringPage = ({data})=>(
    <Layout>
        <SEO title="Monitoring wizyjny"/>
        <div className="banner">
        <div className="page-title lg-header"><h2>Monitoring Wizyjny</h2></div>
            <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="Technika alarmowa"/>
        </div>
        <div className="services-content">
            <ServicesInfo content={MonitoringContent}/>
            <ServicesContact 
            name="Jakub Kamiński" 
            email="jakub.kaminski@nssystemy.pl" 
            phoneNumber="693 223 039"
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