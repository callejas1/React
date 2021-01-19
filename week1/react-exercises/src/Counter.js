import React, { useState } from 'react';

/* 
Inside <Counter> define a state variable called count (initialized with value 0) and state handler called setCount
Pass down the count state variable to <Count>, and the setCount to <Button>

Inside <Counter>, declare a variable called feedback above the return statement. 
Give this variable a ternary operator value "..."
*/

export function Counter() {
  const [count, setCount] = useState(() => 0);
  const feedback = count > 10 ? "It's higher than 10!" : 'Keep counting...';
  const handleClick = () => {
    return setCount(count + 1);
  };
  const style = {
    display: 'flex',
    alignItems: 'center',
    flexFlow: 'column wrap',
  };
  return (
    <div style={style}>
      <div>
        <Button handleClick={handleClick} />
      </div>
      <div>
        <Count count={count} />
      </div>
      <div>
        <p>{feedback}</p>
      </div>
    </div>
  );
}

function Button(props) {
  return (
    <div>
      <button onClick={props.handleClick}>Add 1!</button>
    </div>
  );
}

function Count(props) {
  return (
    <div>
      <p>{props.count}</p>
    </div>
  );
}
