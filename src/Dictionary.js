import React, { useState } from "react";
import "./Dictionary.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

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

        <form className="d-flex justify-content-center mb-5">
          <input
            type="search"
            placeholder="Search for a word..."
            className="form-control me-3 shadow-sm"
            style={{ width: "60%", height: "55px", fontSize: "18px" }}
          />
          <button
            className="btn btn-primary px-5"
            style={{ height: "55px", fontSize: "18px" }}
          >
            Search
          </button>
        </form>

        <div className="results-container">
          {/* Left: Word details */}
          <div className="word-section">
            <h2 className="word text-capitalize">serene</h2>
            <h5 className="text-muted">/səˈriːn/</h5>
            <p className="mt-3">
              <strong>Meaning:</strong> Calm, peaceful, and untroubled.
            </p>
            <p>
              <strong>Synonyms:</strong> tranquil, placid, relaxed
            </p>

            <div className="definitions mt-4">
              <h5>noun</h5>
              <p>
                A state of being calm and free from stress — “a moment of serene
                before the storm.”
              </p>

              <h5>adjective</h5>
              <p>
                Describing a person or scene that is peaceful and untroubled.
              </p>
            </div>
          </div>

          {/* Right: Related images */}
          <div className="image-section">
            <h5>Related Images</h5>
            <div className="row row-cols-3 g-3">
              {Array.from({ length: 9 }).map((_, index) => (
                <div className="col" key={index}>
                  <div className="image-wrapper">
                    <img
                      src={`https://source.unsplash.com/300x300/?nature,calm,${index}`}
                      alt="related"
                      className="img-fluid rounded shadow-sm uniform-img"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

