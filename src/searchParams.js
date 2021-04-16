import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown] = useDropdown("Breed", "animal", breeds);

  //   This is a react hook and they all start with "use"
  // "Const SearchParamas" takes these 4 consts and creates 3 seperate
  // input fields one for text and 2 dropdown menues
  // a custom hook useDropdown "see useDropdown.js" is created to fuse multiple search
  // paramerters into one generic component that fills itslef in according
  // to what information is called and then can be used to push to the webpage.
  // see "Animal and Breed Dropdown"

  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form>
        <label htmlFor="location">
          location
          <input
            id="location"
            value={location}
            placeholder="location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
