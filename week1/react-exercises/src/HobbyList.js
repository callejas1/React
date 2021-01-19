import React from 'react';

/*
Create 2 functional components: <HobbyList> and <Hobbies>
Put the hobbies variable into the <HobbyList> component.
In the return statement of the <HobbyList> use the map() function to return an instance of <Hobby>
Pass down the hobby as a prop (don't forget to add the key prop as well!)
*/

export function HobbyList() {
  const hobbies = [
    'Surfing',
    'Rock climbing',
    'Mountain biking',
    'Breakdancing',
  ];
  const liStyle = {
    display: 'flex',
    alignContent: 'center',
    flexFlow: 'column wrap',
    listStyleType: 'none',
  };
  const hobby = hobbies.map((hobby, i) => (
    <Hobbies key={'el' + i} hobbyName={hobby} />
  ));
  return <ul style={liStyle}>{hobby}</ul>;
}

function Hobbies(props) {
  return <li key={props.key}>{props.hobbyName}</li>;
}
