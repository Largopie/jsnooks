# useNotification

- 동작 시 알람이 울리는 hook

[실습예제]

```js
import React from 'react';

const useNotification = (title, options) => {
  if (!'Notification' in window) return;

  const fireNotif = () => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          new Notification(title, options);
        } else return;
      });
    } else {
      new Notification(title, options);
    }
  };

  return fireNotif;
};

const App = () => {
  const triggerNotif = useNotification('Can I steal your kimchi?', {
    body: 'I love kimchi and you?',
  });
  return (
    <div
      className='App'
      style={{ height: '1000vh' }}
    >
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
};

export default App;
```
