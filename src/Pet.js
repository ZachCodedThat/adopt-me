import React from "react";

export default function Pet({ name, animal, breed, media, location, id }) {
  let hero = "http://placecorgi.com/300/300";
  if (media.length) {
    hero = media[0].small;
  }

  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} -${location}`} </h2>
      </div>
    </a>
  );
}

// with parcel and jsx running I can write the HTML exactly how I
// want it on the page and the transpiler will do all the work to makes it
// run like the above greyed out code
// <div> == React.createElement("div", {}, ...) These are the same thing
