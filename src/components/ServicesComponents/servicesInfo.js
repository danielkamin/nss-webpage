import React from "react"

const ServicesInfo = ({ content }) => {
  return (
    <div className="services-info">
      <div className="page-title lg-header">
        <h2>Oferowane usługi</h2>
      </div>
      {content}
    </div>
  )
}
export default ServicesInfo
