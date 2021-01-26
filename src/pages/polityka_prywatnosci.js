import React from "react"
import Layout from "../components/shared/layout"
import SEO from "../components/seo"
import RodoContent from "../components/rodoContent"
const RodoPage = ()=>(
    <Layout>
        <SEO title="Polityka Prywatności"/>
        <section className="rodo mx-auto">
            <h3 className="bg-title mx-auto">PRZETWARZANIE DANYCH OSOBOWYCH <br/>
                PRZEZ NORD SERWIS SYSTEMY SP. Z O.O. W BIAŁYMSTOKU</h3>
            {RodoContent}
        </section>
    </Layout>
)

export default RodoPage;