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

const ColorBlock = () => {
  const div = document.querySelector('div')
  let i = 0;

  div.onclick = () => div.style.background = colors[++i % colors.length];

  return (
     <div />
  );
}

export default ColorBlock;
