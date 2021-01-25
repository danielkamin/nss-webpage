import React from 'react'
const ServicesContact = ({title,name,phoneNumber,email})=>{
    return (<div className="services-contact">
        <h3 className="bg-title">KONTAKT</h3>
        <p><b>{title}</b><br/>{name}<br/>{phoneNumber}<br/>{email}</p>
    </div>)
}
export default ServicesContact