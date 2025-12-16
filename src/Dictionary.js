import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dictionary.css";

export default function Dictionary() {
  return (
    <div className="Dictionary container py-4">
      <h1 className="text-center mb-4">📖 Dictionary</h1>

      {/* Search bar */}
      <form className="d-flex justify-content-center mb-5">
        <input
          type="search"
          placeholder="Search for a word..."
          className="form-control w-50 me-2 shadow-sm"
        />
        <button className="btn btn-primary px-4">Search</button>
      </form>

      {/* Two-column layout */}
      <div className="row">
        {/* Left: Word details */}
        <div className="col-md-6 mb-4">
          <div className="p-4 shadow-sm rounded word-section">
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
        </div>

        {/* Right: Related images */}
        <div className="col-md-6">
          <div className="row g-3">
            {Array.from({ length: 9 }).map((_, index) => (
              <div className="col-4" key={index}>
                <img
                  src={`https://source.unsplash.com/200x200/?nature,calm,${index}`}
                  alt="related"
                  className="img-fluid rounded shadow-sm"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
