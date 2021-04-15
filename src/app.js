import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  //   return React.createElement("div", {}, [
  //     React.createElement("h1", {}, "Adopt Me!"),
  //     React.createElement(Pet, {
  //       name: "Marty",
  //       animal: "Dog",
  //       breed: "Pitbull",
  //     }),
  //     React.createElement(Pet, {
  //       name: "Jazz",
  //       animal: "Cat",
  //       breed: "Mixed",
  //     }),
  //     React.createElement(Pet, {
  //       name: "Toot",
  //       animal: "Bird",
  //       breed: "Cockatiel",
  //     }),
  //   ]);
  // };

  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Marty" animal="Dog" breed="Pitbull" />
      <Pet name="Jazz" animal="Cat" breed="Mixed" />
      <Pet name="Toot" animal="Bird" breed="Canary" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
