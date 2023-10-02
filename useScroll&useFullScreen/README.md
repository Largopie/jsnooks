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

# useFullScreen

- 전체화면을 만들어 주는 hook

[실습예제]

```js
import React, { useRef } from 'react';

const useFullScreen = (callback) => {
  const element = useRef();

  const runCb = (isFull) => {
    if (callback && typeof callback === 'function') {
      callback(isFull);
    }
  };

  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      runCb(true);
    }
  };
  const exitFull = () => {
    const checkFullScreen = document.fullscreenElement;
    if (checkFullScreen !== null) {
      document.exitFullscreen();
      runCb(false);
    }
  };
  return { element, triggerFull, exitFull };
};
const App = () => {
  const callback = (isFull) => {
    console.log(isFull ? 'We are full' : 'We are small');
  };
  const { element, triggerFull, exitFull } = useFullScreen(callback);
  return (
    <div
      className='App'
      style={{ height: '1000vh' }}
    >
      <div ref={element}>
        <img
          src='https://i.ibb.co/R6RwNxx/grape.jpg'
          alt='grape'
          width='250'
        />
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
};

export default App;
```
