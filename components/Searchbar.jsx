import React from "react";
import { connectAutoComplete } from "react-instantsearch-dom";

const Searchbar = ({ currentRefinement, refine }) => {
  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input
          placeholder="Search pokemon..."
          value={currentRefinement}
          onChange={event => refine(event.currentTarget.value)}
        />
      </div>
    </div>
  );
};

export default connectAutoComplete(Searchbar);
