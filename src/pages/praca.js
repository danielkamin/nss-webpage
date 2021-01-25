import React from 'react'
import { Link } from "gatsby"
import Layout from "../components/shared/layout"
import SEO from "../components/seo"
import PracaContent from '../components/pracaContent'
const PracaPage = () =>(
    <Layout>
        <SEO title="Praca" />
        <div className="praca">
            {PracaContent}
            <Link to="/kontakt/" className="black button-link">Kontakt</Link>
        </div>
    </Layout>
)
export default PracaPage