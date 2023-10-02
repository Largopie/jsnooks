# useTitle

- `html`문서의 제목을 변경해주는 역할을 한다.

**[예제코드]**
```js
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

const App = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000);
  return <div className="App"></div>;
};

export default App;

```
> 처음 title 세팅을 `"Loading..."`으로 설정해둔 후 `setTimeout()`를 사용하여 5초 후에 `"Home"`으로 바뀌도록 구현한 코드이다.