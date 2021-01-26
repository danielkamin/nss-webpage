import React from "react"
import Layout from "../components/shared/layout"
import SEO from "../components/seo"
import CookiesContent from '../components/cookiesContent'
const CookiesPage = ()=>(
    <Layout>
        <SEO title="Ciasteczka"/>
        {CookiesContent}
    </Layout>
)

export default CookiesPage