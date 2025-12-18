import React from "react";
import "./Results.css";

export default function Results(props) {
  const { data } = props;

  if (!data || !data.word) {
    return (
      <div className="text-center text-muted">
        Type a word and press search to begin.
      </div>
    );
  }

  const firstMeaning = data.meanings?.[0];
  const mainDefinition = firstMeaning?.definition || "No definition available.";
  const synonyms =
    firstMeaning?.synonyms?.length > 0
      ? firstMeaning.synonyms.join(", ")
      : "No synonyms available.";

  return (
    <div className="results-container">
      {/* Left: Word details */}
      <div className="word-section">
        <h2 className="word text-capitalize">{data.word}</h2>
        {data.phonetic && <h5 className="text-muted">/{data.phonetic}/</h5>}

        <p className="mt-3">
          <strong>Meaning:</strong> {mainDefinition}
        </p>

        <p>
          <strong>Synonyms:</strong> {synonyms}
        </p>

        <div className="definitions mt-4">
          {data.meanings &&
            data.meanings
              .filter((meaning) => meaning.definition) // only show those with actual definitions
              .map((meaning, index) => (
                <div key={index} className="mb-3">
                  <h5>{meaning.partOfSpeech}</h5>
                  <p>{meaning.definition}</p>

                  {meaning.example && (
                    <p className="text-muted">
                      <em>Example:</em> {meaning.example}
                    </p>
                  )}

                  {meaning.synonyms && meaning.synonyms.length > 0 && (
                    <p>
                      <strong>Synonyms:</strong>{" "}
                      {meaning.synonyms.slice(0, 5).join(", ")}
                    </p>
                  )}
                </div>
              ))}
        </div>
      </div>

      {/* Right: Related images (keep placeholder) */}
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
  );
}
