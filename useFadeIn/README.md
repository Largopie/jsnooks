# useFadeIn

- 화면에 서서히 보여주는 기능

[실습예제]

```js
import React, { useEffect, useRef } from 'react';

const useFadeIn = (duration = 1, delay = 0) => {
  if (typeof duration !== 'number' || typeof delay !== 'number') return;
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

const App = () => {
  const fadeInH1 = useFadeIn(3);
  const fadeInP = useFadeIn(3, 2);
  return (
    <div className='App'>
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>blabalbalbalbablab</p>
    </div>
  );
};

export default App;
```