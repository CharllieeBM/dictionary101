import React from "react";
import "./Photos.css";

export default function Photos({ photos, keyword }) {
  if (!photos || photos.length === 0) {
    return null;
  }

  return (
    <div className="Photos mt-4">
      <h3>Images related to "{keyword}"</h3>
      <div className="row mt-3">
        {photos.map((photo, index) => (
          <div className="col-4 mb-3" key={index}>
            <img
              src={photo.src.landscape}
              alt={photo.alt}
              className="img-fluid rounded shadow-sm"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
