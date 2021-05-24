import React, { useState } from 'react'
import ColorBlock from './ColorBlock'
import style from './CountCard.module.scss'

const CountCard = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)

  const decrement = () => setCount(count - 1)

  return (
    <article className={style.cardWrap}>
      <div className={style.headingWrap}>
        <div>
          <h1 className={style.heading}>Card 1</h1>
          <h2>Count: {count}</h2>
        </div>
        <ColorBlock count={count} />
      </div>
      <div className={style.btnWrap}>
        <button className={style.btnMinus} onClick={decrement}>minus</button>
        <button className={style.btnPlus} onClick={increment}>plus</button>
      </div>
    </article>
  )
}

export default CountCard
