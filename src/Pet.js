import React from "react";
import { Link } from "@reach/router";

export default function Pet({
  name,
  animal,
  breed,
  media,
  location,
  id,
  gender,
}) {
  let hero = "http://placecorgi.com/300/300";
  if (media.length) {
    hero = media[0].small;
  }

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} -${location} - ${gender}`} </h2>
      </div>
    </Link>
  );
}

// with parcel and jsx running I can write the HTML exactly how I
// want it on the page and the transpiler will do all the work to makes it
// run like the above greyed out code
// <div> == React.createElement("div", {}, ...) These are the same thing
