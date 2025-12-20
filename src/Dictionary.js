import React, { useState, useEffect } from "react";
import "./Dictionary.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

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

  function search(event) {
    event.preventDefault();
    if (keyword.trim().length === 0) return;

    const apiKey = "d4ef035e3fbd4697b7a638t907f10o0c";

    // ✅ Dictionary API
    const dictionaryUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios
      .get(dictionaryUrl)
      .then(handleDictionaryResponse)
      .catch((error) => console.error("Error fetching dictionary:", error));

    // ✅ Photo API
    const photoUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
    axios
      .get(photoUrl)
      .then(handlePhotoResponse)
      .catch((error) => console.error("Error fetching photos:", error));
  }

  useEffect(() => {
    if (keyword.trim().length > 0) {
      const apiKey = "d4ef035e3fbd4697b7a638t907f10o0c";

      // Trigger both APIs automatically
      const dictionaryUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
      const photoUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;

      axios
        .get(dictionaryUrl)
        .then(handleDictionaryResponse)
        .catch((error) => console.error("Error fetching dictionary:", error));

      axios
        .get(photoUrl)
        .then(handlePhotoResponse)
        .catch((error) => console.error("Error fetching photos:", error));
    }
  }, [keyword]);

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
          value={keyword}
        />
        <button
          type="submit"
          className="btn btn-primary px-5"
          style={{ height: "55px", fontSize: "18px" }}
        >
          Search
        </button>
      </form>

      {/* Pass the data down */}
      <Results data={result} />
      <Photos keyword={keyword} photos={photos} />
    </div>
  );
}
