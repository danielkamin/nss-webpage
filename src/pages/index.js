import React from "react"
import "../styles/styles.scss"
import Layout from "../components/shared/layout"
import SEO from "../components/seo"
import LandingServices from "../components/LandingComponents/landingServices"
import AboutUs from "../components/LandingComponents/aboutUs"
import Advantages from "../components/LandingComponents/advantages"
import SubInfo from "../components/LandingComponents/subInfo"
import ns from "../images/NS.svg"
const IndexPage = () => (
  <Layout>
    <SEO
      title="NS Systemy"
      description="Monitoring Alarmy Ochrona Fizyczna Sprzątanie"
    />
    <div className="landing-main">
      <section className="landing">
        <div className="landing-content">
          <LandingServices />
          <img src={ns} className="landing-image" />
        </div>
      </section>
      <section className="landing-info">
        {AboutUs}
        {Advantages}
        {SubInfo}
      </section>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2395.042860566428!2d23.18163321600106!3d53.10942280013162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ffc0e76466ff1%3A0x4c0690379f30080f!2sNord%20Serwis%20Systemy%20Sp.%20z%20o.o.!5e0!3m2!1spl!2spl!4v1611399113438!5m2!1spl!2spl"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </div>
  </Layout>
)

export default IndexPage
