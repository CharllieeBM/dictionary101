import React, { useState } from "react";
import "./Dictionary.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [result, setResult] = useState(null);

  function handleResponse(response) {
    setResult(response.data);
  }

  function search(event) {
    event.preventDefault();
    let apiKey = "d4ef035e3fbd4697b7a638t907f10o0c";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary container py-4">
      <h1 className="text-center mb-4">📖 Dictionary</h1>

      <form onSubmit={search} className="d-flex justify-content-center mb-5">
        <input
          type="search"
          placeholder="Search for a word..."
          className="form-control me-3 shadow-sm"
          style={{ width: "60%", height: "55px", fontSize: "18px" }}
          onChange={handleKeywordChange}
        />
        <button
          type="submit"
          className="btn btn-primary px-5"
          style={{ height: "55px", fontSize: "18px" }}
        >
          Search
        </button>
      </form>

      {result && <Results data={result} />}
    </div>
  );
}