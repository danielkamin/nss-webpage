import { Link } from "gatsby"
import React, { useRef,useState,useEffect } from "react"
import nssystemy_poziome from "../../images/nssystemy-poziome.svg"
const Nav = ()=>{
    const [documentBody,setDocumentBody] = useState()
    useEffect(()=>{
        if(document!==undefined){
            setDocumentBody(document.querySelector('body'))
        } 
    },[])
    const list = useRef()
    const burger = useRef()
    const openMenu=()=>{
        setHidden(!hidden)
        list.current.childNodes.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation = ''
                documentBody.style = "";
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7+0.3}s`;
                documentBody.style = "position:fixed;"
            }
        })
        burger.current.classList.toggle('toggle')
    }
    const [hidden,setHidden] = useState(true);
    const onRedirect = ()=>{
        documentBody.style=''
    }
    return (
        <nav>
            <div className="logo"><Link to="/"><img src={nssystemy_poziome}/></Link></div>
            <div className={`nav-links ${hidden? "":"nav-active"}`}>
            <ul ref={list}>
                <li><Link onClick={onRedirect} to="/monitoring_wizyjny/">Monitoring</Link></li>
                <li><Link onClick={onRedirect} to="/technika_alarmowa/">Technika</Link></li>
                <li><Link onClick={onRedirect} to="/uslugi_porzadkowe/">Usługi Porządkowe</Link></li>
                <li><Link onClick={onRedirect} to="/ochrona_fizyczna/">Ochrona Fizyczna</Link></li>
                <li><Link onClick={onRedirect} to="/kontakt">Kontakt</Link></li>
                <li><Link onClick={onRedirect} to="/praca/">Praca</Link></li>  
            </ul>
            </div>
            <div className="burger" onClick={openMenu} ref={burger}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    )
}
export default Nav