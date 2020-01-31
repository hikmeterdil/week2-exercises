import React from "react";

export function Joke({ joke }) {
  return (
    <div className="jokes">
      <p>{joke.setup}</p>
      <p>{joke.punchline}</p>
    </div>
  );
};