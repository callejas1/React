import React from 'react';

export default function Button({ getDogPhoto }) {
  return (
    <button
      className="dogBtn"
      onClick={() => {
        getDogPhoto();
      }}
    >
      GET A DOG! 🐶
    </button>
  );
}
