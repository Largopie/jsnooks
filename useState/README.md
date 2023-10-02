# useState

```js
  const [item, setItem] = useState(1);
```

배열의 첫 번째 요소에 값을 저장하고, 2번째 요소로 값을 수정하는 역할을 한다.



- hook 미사용 시
  ```js
  class AppUgly extends React.Component {
    state = {
      item: 1
    }
    render() {
      const {item} = this.state;
      return (
        <div className="App">
          <h1>Hello {item}</h1>
          <h2>Start editing to see some magic happen!</h2>
          <button onClick={this.incrementItem}>increment</button>
          <button onClick={this.decrementItem}>decrement</button>
        </div>
      );
    }
    incrementItem = () => {
      this.setState(state => {
        return {
          item:state.item + 1
        }
      })
    }
    decrementItem = () => {
      this.setState(state => {
        return {
          item:state.item + 1
        }
      })
    }
  }
  ```

- hook 사용 시 (코드의 줄이 굉장히 짧아짐)
  ```js
  const App = () => {
    const [item, setItem] = useState(1);
    const incrementItem = () => setItem(item + 1);
    const decrementItem = () => setItem(item - 1);

    return (
      <div className="App">
        <h1>Hello {item}</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={incrementItem}>increment</button>
        <button onClick={decrementItem}>decrement</button>
      </div>
    );
  }
  ```
