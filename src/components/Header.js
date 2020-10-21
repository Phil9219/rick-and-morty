import "./header.css";
import logoSrc from "../assets/rick-and-morty-globe.png";
import { createElement } from "../utils/elements";

function Header() {
  const logo = createElement("img", {
    src: logoSrc,
    alt: "Logo",
  });

  const header = createElement("header", {
    className: "header",
    children: [logo],
  });
  return header;
}

export default Header;
