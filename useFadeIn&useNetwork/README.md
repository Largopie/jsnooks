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

# useNetwork

- `navigator`가 online/offline 되는 것을 막아주는 hook

[실습예제]

```js
import React, { useEffect, useState } from 'react';

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === 'function') {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener('online', handleChange);
    window.addEventListener('offline', handleChange);
    return () => {
      window.removeEventListener('online', handleChange);
      window.removeEventListener('offline', handleChange);
    };
  }, []);
  return status;
};

const App = () => {
  const handleNetworkChange = (online) => {
    console.log(online ? 'We just went online' : 'We are offline');
  };
  const onLine = useNetwork(handleNetworkChange);
  return (
    <div className='App'>
      <h1>{onLine ? 'Online' : 'Offline'}</h1>
    </div>
  );
};

export default App;
```
