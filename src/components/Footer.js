import { socialLinks } from "../data";
import PageLinks from "./PageLinks";

const Footer = () => {
  return (
    <footer className="section footer">

      <PageLinks ulClass={'footer-links'} linkClass={'footer-link'} />

      <ul className="footer-icons">
        {socialLinks.map(({ id, href, icon }) => {
          return (
            <li key={id}>
              <a
                href={href}
                target="_blank"
                className="footer-link"
              >
                <i className={icon}></i>
              </a>
            </li>
          );
        })}
      </ul>

      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;