import React from "react";
import { footerLinks } from "./footer.config";
import logo from "./../../resources/images/redbox_logo.svg";
import "./Footer.scss";

const Footer = () => {
  const year = new Date().getFullYear();

  const getLinks = category =>
    Object.keys(footerLinks[category]).map(link => (
      <a
        key={footerLinks[category][link].name}
        href={footerLinks[category][link].link}
      >
        {footerLinks[category][link].name}
      </a>
    ))

  return (
    <footer className="footer">
      <img src={logo} alt="Redbox logo" className="footer__logo" />
      <p className="footer__legal-notice">
        Use of this service and this website constitutes acceptance of our:
      </p>
      <p className="footer__links footer__links--primary">
        {getLinks("privacy")}
      </p>

      <p className="footer__links footer__links--secondary">
        {getLinks("terms")}
      </p>
      <hr className="footer__hr" />
      <p className="footer__trademark">
        &copy; {year}, Redbox Automated Retail, LLC. All rights reserved. <br />{" "}
        REDBOX and its associated logos are trademarks of Redbox Automated
        Retail, LLC.
      </p>
    </footer>
  )
}

export default Footer;
