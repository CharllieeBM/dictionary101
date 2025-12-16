import React from "react";
import "./Results.css";

export default function Results(props) {
  return (
    <div className="Results">
      <h2>{props.keyword}</h2>
      <p className="phonetic">/ˈsʌn.ʃaɪn/ ☀️</p>
      <p className="meaning">
        <strong>Definition:</strong> the light and heat that come from the sun.
      </p>
      <p>
        <strong>Synonyms:</strong> daylight, sunlight, warmth
      </p>
      <audio controls>
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
      </audio>
    </div>
  );
}
