import React from "react";
import { render } from "react-dom";
import { Link, Router } from "@reach/router";
import SearchParams from "./searchParams";
import Details from "./Details";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>

        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));

// This is the highest level of this program where the const App is rendered to the index.html using document.getElementById("root") which looks for the
// Id of root within the index.html document
// React.StrictMode disables features the react dev team is phasing out of the production build furture proofing in a way your code.
