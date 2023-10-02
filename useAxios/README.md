# useAxios

- Axios로 api를 불러오는 hook
- trigger를 속여 refetch 기능 구현

[실습예제]

- App.js

  ```js
  // App.js
  import React from 'react';
  import useAxios from './useAxios';

  const App = () => {
    const { loading, data, refetch } = useAxios({
      url: 'https://yts.mx/api/v2/list_movies.json',
    });

    return (
      <div>
        <h1>{data && data.status}</h1>
        <h2>{loading && 'Loading'}</h2>
        <button onClick={refetch}>refetch</button>
      </div>
    );
  };

  export default App;
  ```

- Axios.js

    ```js
    // Axios.js
    import defualtAxios from 'axios';
    import { useEffect, useState } from 'react';

    const useAxios = (opts, axiosInstance = defualtAxios) => {
      const [state, setState] = useState({
        loading: true,
        error: null,
        data: null,
      });

      const [trigger, setTrigger] = useState(0);

      if (!opts.url) return;

      const refetch = () => {
        setState({
          ...state,
          loading: true,
        });
        setTrigger(Date.now());
      };

      useEffect(() => {
        axiosInstance(opts)
          .then((data) => {
            setState({
              ...state,
              loading: false,
              data,
            });
          })
          .catch((error) => {
            setState({
              ...state,
              loading: false,
              error,
            });
          });
      }, [trigger]);

      return { ...state, refetch };
    };

    export default useAxios;
    ```