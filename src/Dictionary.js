import React, { useState, useEffect } from "react";
import "./Dictionary.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState(null);

  // ✅ Fetch data automatically when keyword changes
  useEffect(() => {
    if (keyword.trim().length > 0) {
      const apiKey = "d4ef035e3fbd4697b7a638t907f10o0c";
      const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

      axios
        .get(apiUrl)
        .then((response) => setResult(response.data))
        .catch((error) => {
          console.error("Error fetching definition:", error);
          setResult({ status: "not_found", word: keyword });
        });
    }
  }, [keyword]);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (keyword.trim().length > 0) {
      const apiKey = "d4ef035e3fbd4697b7a638t907f10o0c";
      const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
      axios
        .get(apiUrl)
        .then((response) => setResult(response.data))
        .catch((error) => {
          console.error("Error fetching definition:", error);
          setResult({ status: "not_found", word: keyword });
        });
    }
  }

  return (
    <div className="Dictionary container py-4">
      <h1 className="text-center mb-4">📖 Dictionary</h1>

      <form
        onSubmit={handleSubmit}
        className="d-flex justify-content-center mb-5"
      >
        <input
          type="search"
          placeholder="Search for a word..."
          className="form-control me-3 shadow-sm"
          style={{ width: "60%", height: "55px", fontSize: "18px" }}
          onChange={handleKeywordChange}
        />
        <button
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
