import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("sunshine");

  function handleSubmit(event) {
    event.preventDefault();
    // API call will go here later
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1>📖 Dictionary</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="search"
          placeholder="Search for a word..."
          onChange={handleKeywordChange}
          className="form-control"
        />
        <button type="submit" className="btn btn-search">
          Search
        </button>
      </form>

      <div className="row mt-4">
        <div className="col-md-7">
          <Results keyword={keyword} />
        </div>
        <div className="col-md-5">
          <Photos keyword={keyword} />
        </div>
      </div>
    </div>
  );
}
