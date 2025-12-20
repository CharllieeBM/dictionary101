import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState(null);
  const [photos, setPhotos] = useState([]);

  function handleDictionaryResponse(response) {
    setResult(response.data);
  }

  function handlePhotoResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    if (keyword.trim().length === 0) return;

    const dictionaryApiKey = "d4ef035e3fbd4697b7a638t907f10o0c";
    const dictionaryUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${dictionaryApiKey}`;
    axios.get(dictionaryUrl).then(handleDictionaryResponse);

    const photoApiKey = "d4ef035e3fbd4697b7a638t907f10o0c";
    const photoUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${photoApiKey}`;
    axios.get(photoUrl).then(handlePhotoResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  return (
    <div className="Dictionary container py-5">
      {/* Heading */}
      <div className="text-center mb-4">
        <h1 className="mb-3">📖 Dictionary</h1>
        <form onSubmit={handleSubmit} className="d-flex justify-content-center">
          <input
            type="search"
            placeholder="Search for a word..."
            onChange={handleKeywordChange}
            className="form-control me-2"
            style={{ maxWidth: "400px" }}
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
      </div>

      {/* Results section */}
      <Results data={result} />

      {/* Photos below */}
      <div className="mt-5">
        <Photos keyword={keyword} photos={photos} />
      </div>
    </div>
  );
}
