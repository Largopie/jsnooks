# useEffect

- `componentDidmount()`, `componentDidUpdate()`, `componentWillUnmount()`의 역할을 한다.

1. 1번째 인자(function으로서의 `effect`)

    ❗️`componentDidMount()`

2. 2번째 인자(`deps`)

    `useEffect()`가 `deps`리스트에 있는 값이 변할때만 실행되게 한다.

    ❗️`componentDidUpdate()`

**[코드 예시]**
```js
import React, { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const sayHello = () => console.log("hello");
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);

  useEffect(() => {
    sayHello();
  }, [number]);

  return (
    <div className="App">
      {<button onClick={() => setNumber(number + 1)}>{number}</button>}
      {<button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>}
    </div>
  );
};

export default App;
```

> `dependency` 리스트에 변수가 존재하면 변수의 변경사항이 생길 때 마다 새로고침을 한다.