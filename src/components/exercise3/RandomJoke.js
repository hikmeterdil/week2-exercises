import React, { useState, useEffect } from "react";
import {Joke} from "./Joke";

export  function RandomJoke() {
  const [joke, setJoke] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  const getJoke = () => {
    setLoading(true);
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then(res => res.json())
      .then(data => {
        setJoke(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  };

  useEffect(getJoke, []);

  if (isLoading) {
    return <p>Getting data</p>;
  }
  if (hasError) {
    return <p>has error</p>;
  }
  if (joke) {
    return (
      <div className='joke'>
        <Joke joke={joke} />
      </div>
    );
  }
}