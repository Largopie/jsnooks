# useClick, useHover

## [event click을 mouseenter로 변경하면 useHover]

## useRef

- `component`의 어떤 부분을 선택할 수 있는 방법
- `document.getElementById()`를 사용하는 것과 동등
- `React`에 있는 모든 `component`는 `ref`라는 `reference element`를 가지고 있음
- `html`태그에 `ref={이름}`과 같이 사용
- `reference는` `{current: HTMLHeadingElement}` 의 형식으로 값을 반환한다.

- `useEffect`에서 return한 함수는 `componentWillUnmount` 때 호출된다. (`useEffect`에서 return한 함수를 `cleanup function`이라고 부른다.)


```js
import React, { useRef, useEffect } from "react";

const useClick = (onClick) => {
  const element = useRef();

  useEffect(() => {
    if (typeof onClick !== "function") {
      return;
    }
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        console.log("hi");
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);

  return typeof onClick !== "function" ? undefined : element;
};

const App = () => {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);

  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

export default App;

```