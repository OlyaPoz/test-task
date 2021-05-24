import React from 'react';

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

  return <div style={{ background: color }}>{count}</div>
};

export default ColorBlock;
