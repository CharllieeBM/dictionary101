import React, { useRef } from "react";
import "./Results.css";
import { Volume2 } from "lucide-react"; // or "react-icons/fa" if you prefer
// import { FaVolumeUp } from "react-icons/fa"; // alternative icon

export default function Results({ data }) {
  const audioRef = useRef(null);

  if (!data || !data.word) {
    return (
      <div className="text-center text-muted mt-4">
        Type a word and press search to begin.
      </div>
    );
  }

  if (
    data.status === "not_found" ||
    !data.meanings ||
    !Array.isArray(data.meanings) ||
    data.meanings.length === 0
  ) {
    return (
      <div className="alert alert-warning text-center mt-4">
        No results found for <strong>"{data.word}"</strong>. Please try another
        word.
      </div>
    );
  }

  const firstMeaning = data.meanings[0];
  const mainDefinition = firstMeaning?.definition || "No definition available.";
  const synonyms =
    firstMeaning?.synonyms?.length > 0
      ? firstMeaning.synonyms.join(", ")
      : "No synonyms available.";

  const audioUrl = data.phonetics?.[0]?.audio || null;

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {
        console.warn("Audio could not be played automatically.");
      });
    }
  };

  return (
    <div className="results-container">
      <div className="word-section">
        <div className="d-flex align-items-center gap-2 mb-2">
          <h2 className="word text-capitalize mb-0">{data.word}</h2>

          {audioUrl && (
            <>
              <button
                onClick={audioUrl ? playAudio : null}
                disabled={!audioUrl}
                className={`btn btn-outline-secondary btn-sm rounded-circle d-flex align-items-center justify-content-center ${
                  !audioUrl ? "opacity-50" : ""
                }`}
                style={{
                  width: "35px",
                  height: "35px",
                  padding: "0",
                  border: "none",
                }}
                aria-label="Play pronunciation"
                title={audioUrl ? "Play pronunciation" : "No audio available"}
              >
                <Volume2 size={20} />
              </button>

              {audioUrl && <audio ref={audioRef} src={audioUrl}></audio>}
            </>
          )}
        </div>

        {data.phonetic && (
          <h5 className="text-muted mb-3">/{data.phonetic}/</h5>
        )}

        <p className="mt-3">
          <strong>Meaning:</strong> {mainDefinition}
        </p>

        <p>
          <strong>Synonyms:</strong> {synonyms}
        </p>

        <div className="definitions mt-4">
          {data.meanings
            .filter((meaning) => meaning.definition)
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
  );
}
