import React from "react"
import Layout from "../components/shared/layout"
import SEO from "../components/seo"

const KontaktPage = ()=>(
   <Layout>
        <SEO title='Kontakt'/>
            <section className="contact-content">
                <div className="page-title lg-header"><h2>Znajdź nas, lub <br/>skontaktuj się z nami</h2></div>
                <div className="contact-info">
                    <p className="bold">Biuro czynne w godzinach <br/>9:00 - 15:00</p>
                    <p>NORD SERWIS SYSTEMY SP. Z O.O.<br/>
                    Białystok 15-535<br/>
                    ul. Praw Kobiet 4<br/>
                    <a href="tel:85 888 00 05">85 888 00 05</a><br/>
                    <a href="tel:85 749 98 00">85 749 98 00</a><br/>
                    <a href="mailto:biuro@nssystemy.pl">biuro@nssystemy.pl</a>
                    </p>
                </div>
            </section>
            <div className="map map-ns">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2395.042860566428!2d23.18163321600106!3d53.10942280013162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ffc0e76466ff1%3A0x4c0690379f30080f!2sNord%20Serwis%20Systemy%20Sp.%20z%20o.o.!5e0!3m2!1spl!2spl!4v1611399113438!5m2!1spl!2spl"  allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
            </div>
    </Layout>
)

export default KontaktPage