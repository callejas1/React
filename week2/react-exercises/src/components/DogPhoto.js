import React from 'react';

export default function DogPhoto({ doggo, i }) {
  return <img className="dogImg" src={doggo} alt="Doggo" key={i} />;
}
