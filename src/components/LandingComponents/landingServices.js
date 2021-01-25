import { Link } from "gatsby";
import React from "react"

const LandingServices = ()=>{
    return (<div >
<div className="landing-services">
    Monitoring Wizyjny<br></br>
    Technika Alarmowa <br></br>
    Ochrona Fizyczna <br></br>
    Usługi Porządkowo Czystościowe<br></br>
</div>
<Link to="/kontakt/" className="white button-link">Kontakt</Link>
    </div>)
}
export default LandingServices;