import React, { useEffect, useState } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import Results from "./results";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal,
    });

    setPets(animals || []);
  }

  useEffect(() => {
    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(({ breeds }) => {
      const breedStrings = breeds.map(({ name }) => name);
      setBreeds(breedStrings);
    }, console.error);
  }, [animal, setBreeds, setBreed]);

  //   This is a react hook and they all start with "use"
  // "Const SearchParamas" takes these 4 consts and creates 3 seperate
  // input fields one for text and 2 dropdown menues
  // a custom hook useDropdown "see useDropdown.js" is created to fuse multiple search
  // paramerters into one generic component that fills itslef in according
  // to what information is called and then can be used to push to the webpage.
  // see "Animal and Breed Dropdown"
  // The useEffect only runs after render when [animal, setBreeds, setBreed] updates. and does not run on the first render but is scheduled to the next render cycle.
  // You can use a dependency array of [] to tell a useEffect to run on mount and never again

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          location
          <input
            id="location"
            value={location}
            placeholder="location"
            onChange={(event) => {
              console.log(event);
              setLocation(event.target.value);
            }} //where is .target pointing? possibly at location because of where it was called ?
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;

// This ensures the project can call upon this component at need using
// "SearchParams"
