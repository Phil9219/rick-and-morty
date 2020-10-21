import "./search.css";
import { createElement } from "../utils/elements";

function Search({ onchange }) {
  const input = createElement("input", {
    placeholder: "Enter Character",
  });

  const button = createElement("button", {
    innerText: "🔍",
  });

  const container = createElement("form", {
    className: "searchbar",
    children: [input, button],
    onsubmit: (event) => {
      event.preventDefault();
      onchange(input.value);
    },
  });
  return container;
}
export default Search;
