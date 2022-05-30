import React from "react"
import { Link } from "gatsby"
import ns from "../../images/NS.svg"
import fb from "../../images/fb-white.png"
const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <img className="logo-small" src={ns} />
        <img className="fb" src={fb} title="Odwiedź naszego Facebook'a" />
        <Link to="/polityka_prywatnosci/">Polityka Prywatności</Link>
        <Link to="/polityka_ciasteczek/">Pliki cookie</Link>
        <p>Copyright © 2020 Nord Serwis Systemy sp. z o.o.</p>
      </div>
    </footer>
  )
}
export default Footer
