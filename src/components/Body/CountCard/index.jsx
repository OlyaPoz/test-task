import React, { useState, useEffect } from 'react'
import ColorBlock from './ColorBlock';


const CountCard = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
   
  }

  const decrement = () => setCount(count - 1)

  return (
    <article>
      <h1>Card 1</h1>
      <h2>Count: {count}</h2>
      <ColorBlock />
      <button onClick={decrement}>minus</button>
      <button onClick={increment}>plus</button>
    </article>
  )
}

export default CountCard
