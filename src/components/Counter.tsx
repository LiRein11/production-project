import React, { FC } from 'react';
import classes from './Counter.module.scss';

export const Counter:FC = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(prev => prev+1);
  };
  return (
    <div className={classes.ab}>
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
    </div>
  );
};

;
