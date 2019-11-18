import React from "react";
import Form from './components/form';
import TodosList from './components/todos-list';
import Filter from './components/filter';

function App() {
  return (
    <>
      <Form />
      <TodosList />
      <Filter />
    </>
  );
}



export default App;
