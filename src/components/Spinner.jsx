import React from "react";

const Spinner = () => {
  return (
    <div className="container text-center mt-5">
      <div
        className="spinner-border text-primary"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <p>Loading...</p>
    </div>
  );
};

export default Spinner;
