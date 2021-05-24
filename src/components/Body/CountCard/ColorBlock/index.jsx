import React from 'react';
import style from './ColorBlock.module.scss';

const colors = [
  'red',
  'blue',
  'green',
  'yellow',
  'cyan',
  'magenta',
  'black',
  'gray'
];

const ColorBlock = props => {
  const { count } = props;

  let color = colors[count % colors.length];

  return <div className={style.colorBlock} style={{ background: color }}></div>
};

export default ColorBlock;
