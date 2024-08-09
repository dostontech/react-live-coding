import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  let productCount = 20;
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(lastCount => Math.min(lastCount + 1, productCount))}>Increase</button>
      <button onClick={() => setCount(prevCount => Math.max(prevCount - 1, 0))}>Decrease</button>    \
    </div>
  );
};

export default Counter;