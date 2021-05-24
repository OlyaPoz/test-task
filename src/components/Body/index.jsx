import React from 'react';
import CountCard from './CountCard';
import style from './Body.module.scss';

const Body = props => {
  return (
    <div className={style.bodyWrap}>
      <div className={style.headingsWrap}>
        <h2>Counters</h2>
        <p className={style.cardHeading}>
          <img className={style.icon} src='/icons/arrow-all.svg' alt='icon' />
          Card
        </p>
      </div>
      <div className={style.cardsWrap}>
        <CountCard />
        <CountCard />
        <CountCard />
        <CountCard />
        <CountCard />
        <CountCard />
        <CountCard />
        <CountCard />
        <CountCard />
        <CountCard />
        <CountCard />
        <CountCard />
      </div>
    </div>
  )
};

export default Body;
