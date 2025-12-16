import React from "react";
import "./Photos.css";

export default function Photos(props) {
  return (
    <div className="Photos">
      <h3>Images related to "{props.keyword}"</h3>
      <div className="row mt-3">
        {[...Array(9)].map((_, index) => (
          <div className="col-4 mb-3" key={index}>
            <img
              src={`https://source.unsplash.com/160x160/?${props.keyword}&sig=${index}`}
              alt={props.keyword}
              className="img-fluid rounded shadow-sm"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
