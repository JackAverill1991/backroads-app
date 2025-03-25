import { pageLinks } from "../data";

const PageLinks = ({ ulClass, linkClass }) => {
  return (
    <ul className={ulClass} id="nav-links">
      {pageLinks.map(({ id, href, text }) => {
        return (
          <li key={id}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              {" "}
              {text}{" "}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default PageLinks;