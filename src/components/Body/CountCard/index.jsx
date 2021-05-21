import React, { useState } from 'react';

const CountCard = () => {
  const [count, setCount ]= useState(0);

  const increment = () => setCount(count + 1);
 
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h1>Card 1</h1>
      <h2>Count: {count}</h2>
      <div>0</div>
      <button onClick={decrement}>minus</button>
      <button onClick={increment}>plus</button>
    </div>
  );
}

export default CountCard;
