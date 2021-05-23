import React, { useState, useEffect } from 'react';

const colors = ['red', 'blue', 'green', 'yellow', 'cyan', 'magenta', 'black', 'gray'];

const CountCard = () => {
  const [count, setCount ]= useState(0);
  const [color, setColor] = useState('red');
  const [isRed, setIsRed] = useState(true);

   

  const increment = () => {
    setCount(count + 1);
    setIsRed(!isRed);
    setColor(isRed ? color === colors.id : 'red');
  };
 
  const decrement = () => setCount(count - 1);

  

  return (
    <div>
      <h1>Card 1</h1>
      <h2>Count: {count}</h2>
      <div style={{background:color}}>0</div>
      <button onClick={decrement}>minus</button>
      <button onClick={increment}>plus</button>
    </div>
  );
}

export default CountCard;
