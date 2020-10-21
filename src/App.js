import "./app.css";
import Character from "./components/Character";
import Header from "./components/Header";
import { getCharacterById } from "./utils/api";
import { createElement } from "./utils/elements";

function App() {
  const header = Header();

  const main = createElement("main");

  function CharacterList(i) {
    let n = 1;
    while (n <= i) {
      getCharacters();
      n++;
    }

    async function getCharacters() {
      const NameCharacter = await getCharacterById(n);

      main.append(
        Character({
          name: NameCharacter.name,
          imgSrc: NameCharacter.image,
        })
      );
    }
  }
  CharacterList(15);

  const container = createElement("div", { children: [header, main] });

  return container;
}

export default App;
