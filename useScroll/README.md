# useScroll

- 유저가 scroll 동작을 했을 때 무언가를 변경시킬 수 있음

[실습예제]

```js
import React, { useEffect, useState } from 'react';

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });

  const onScroll = () => {
    setState({
      x: window.scrollX,
      y: window.scrollY,
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return state;
};

const App = () => {
  const { x, y } = useScroll();

  return (
    <div
      className='App'
      style={{ height: '1000vh' }}
    >
      <h1 style={{ position: 'fixed', color: y > 100 ? 'red' : 'blue' }}>
        Hello
      </h1>
    </div>
  );
};

export default App;
```