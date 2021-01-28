import React from 'react';

/* 
Create a functional component called <Guarantee>
Instantiate it 3 times
Give each component 3 props: an img, title and description
Pass down to each component the appropriate content. Take the images from the assets folder, inside the exercise1 folder
*/

// Couldn't manage to render imgs using assets/exercises, so I created an assets folder inside /public instead.

export function Guarantee(props) {
  return (
    <div>
      <img src={props.img} alt={props.alt} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}
