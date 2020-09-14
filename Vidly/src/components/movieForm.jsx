import React from "react";

const MovieForm = ({ match, history }) => {
  return (
    <div>
      <h1>Movie Form {match.params.id}</h1>
      <button
        onClick={() => history.push("/movies")}
        className="btn btn-primary"
      >
        {" "}
        save{" "}
      </button>
    </div>
  );
};

export default MovieForm;
