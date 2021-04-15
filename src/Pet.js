import React from "react";

export default function Pet({ name, animal, breed }) {
  //   return React.createElement("div", {}, [
  //     React.createElement("h1", {}, name),
  //     React.createElement("h2", {}, animal),
  //     React.createElement("h2", {}, breed),
  //   ]);
  return (
    <div>
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
    </div>
  );
}

// with parcel and jsx running I can write the HTML exactly how I
// want it on the page and the transpiler will do all the work to makes it
// run like the above greyed out code
// <div> == React.createElement("div", {}, ...) These are the same thing
