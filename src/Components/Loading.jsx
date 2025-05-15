import React from "react";

const Loading = () => (
  <div className="text-center my-3">
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Caricamento...</span>
    </div>
    <p>Caricamento in corso...</p>
  </div>
);

export default Loading;
