import React from "react";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import List from "./components/List/List";
import reducer from "./redux-flow/reducers";

function App() {
  const store = createStore(reducer);

  return (
    <>
    <Provider store={store}>
      <List />
    </Provider>
    </>
  );
}

export default App;
