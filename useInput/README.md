# useInput

- `input`을 업데이트 한다.
- `initialValue`를 `parameter`로 받는다.

```js
import React, { useState } from "react";
import "./styles.css";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return { value };
};

const App = () => {
  const name = useInput("Mr.");
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};

export default App;
```

>초기값을 지정 후 value를 가져올 수 있다.<br>
>`onChange`를 사용하여 값을 변경하는 방법도 있다. 이 때 함수를 인자로 받아 유효성 검사도 같이 가능하다.

```js
import React, { useState } from "react";
import "./styles.css";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value }
    } = event;

    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const App = () => {
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Mr.", maxLen);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};

export default App;
```

함수의 조건 값을 간단한 예로
```js
const func = (value) => !value.includes('@');
```
를 설정하면 '@'문자를 사용할 수 없게 설정할 수도 있다.