import { Link } from 'gatsby';
import React,{useEffect,useRef,useState} from 'react'
 const CookiesConsentBanner = ()=>{
    useEffect(()=>{
        getCookieConsent();
    },[])
    const banner = useRef();
    const checkCookieConsent =()=>{
        console.log('check')
        let name = "CookieConsent"+"=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let allCookies = decodedCookie.split(';')
        for(let i = 0; i <allCookies.length; i++) {
            let c = allCookies[i];
            while (c.charAt(0) == ' ') {
              c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
              return c.substring(name.length, c.length);
            }
          }
        return "";
    }
    const getCookieConsent = ()=>{
        let consent = checkCookieConsent();
        console.log(consent)
        if(consent!=""){
            banner.current.classList.toggle('hide')
        }
    }
    const setCookieConsent = ()=>{
        let d = new Date();
        d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
        let expires = "expires="+d.toUTCString();
        document.cookie = "CookieConsent" + "=" + "true" + ";" + expires + ";path=/";
        banner.current.classList.toggle('hide')
    }
     return <div className="cookie-consent" ref={banner}>
          
         <p><b>TA STRONA UŻYWA CIASTECZKA.</b> Dowiedz się więcej o <Link to="/ciasteczka">celu ich używania</Link> i <a href="http://jakwylaczyccookie.pl">zmianie ustawień cookie</a> w przeglądarce. Korzystając ze strony wyrażasz zgodę na 
         używanie ciasteczek, zgodnie z aktualnymi ustawieniami przeglądarki.</p>
         <div onClick={setCookieConsent}>   
         <div className="close-consent toggle" >
             <div className="line1"></div>             
             <div className="line2"></div>
             <div className="line3"></div>
         </div>
         Zamknij
         </div>
     </div>
 }
 export default CookiesConsentBanner