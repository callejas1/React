import React from 'react';

export default function Button({ getFriend }) {
  return (
    <button className="friendBtn" onClick={getFriend}>
      GET A FRIEND! 🤝
    </button>
  );
}
