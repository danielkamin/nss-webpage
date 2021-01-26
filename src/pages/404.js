import React from "react"
import Layout from "../components/shared/layout"
import SEO from "../components/seo"
import notFound from "../images/404.svg"
const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="not-found">
      <img src={notFound}/>
    </div>
  </Layout>
)

export default NotFoundPage
