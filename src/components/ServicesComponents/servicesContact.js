import React from 'react'
const ServicesContact = ({title,name,phoneNumber,email})=>{
    return (<div className="services-contact">
        <h3 className="bg-title">KONTAKT</h3>
        <p><b>{title}</b><br/>{name}<br/><a href={`tel:+48${phoneNumber}`}>{phoneNumber}</a><br/><a href={`mailto:${email}`}>{email}</a></p>
    </div>)
}
export default ServicesContact