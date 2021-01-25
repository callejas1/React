import React from 'react';

export default function Joke({ joke }) {
  const { setup, punchline } = joke;
  return (
    <div className="wrapper">
      <p>{setup}</p>
      <p className="punchline">{punchline}</p>
    </div>
  );
}
