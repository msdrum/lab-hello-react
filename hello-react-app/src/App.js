import "./App.css";
import Landpage from "./components/Landpage";
import Card from "./components/Card";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

function App() {
  //CRIAR O ARRAY

  const cards = [
    {
      image: icon1,
      title: "Declarative",
      text1: "React makes it",
      text2: "painless to create",
      text3: "interactive UIs.",
    },
    {
      image: icon2,
      title: "Components",
      text1: "Build encapsulated",
      text2: "components that",
      text3: "manage their state.",
    },
    {
      image: icon3,
      title: "Single-Way",
      text1: "A set of immutable",
      text2: "values are passed to",
      text3: "the component's.",
    },
    {
      image: icon4,
      title: "JSX",
      text1: "Statically-typed,",
      text2: "designed to run on",
      text3: "modern browsers.",
    },
  ];

  return (
    <>
      <div>
        <Landpage />
      </div>

      <div className="card-container">
        {/* <Card /> */}

        {cards.map((element) => {
          return (
            <Card
              image={element.image}
              title={element.title}
              text1={element.text1}
              text2={element.text2}
              text3={element.text3}
              text4={element.text4}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
