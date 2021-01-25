import React, { useState, useEffect } from 'react';
import Joke from './Joke';

export default function RandomJoke() {
  const JOKE_URL = 'https://official-joke-api.appspot.com/random_joke';
  const [joke, setJoke] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const getJoke = async () => {
    try {
      const res = await fetch(JOKE_URL);
      if (res.status !== 200) {
        throw new Error('Request failed!');
      }
      const data = await res.json();
      setJoke(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      <Joke joke={joke} />
      {error && <p>Something went wrong... {error}</p>}
    </div>
  );
}
