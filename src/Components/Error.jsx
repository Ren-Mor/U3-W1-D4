import React from "react";

const Error = ({ message }) => (
  <div className="text-danger text-center my-3">
    <p>⚠️ Si è verificato un errore:</p>
    <p>{message}</p>
  </div>
);

export default Error;
