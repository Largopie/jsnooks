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
