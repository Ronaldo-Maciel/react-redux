import React from "react";
import Form from './components/form';
import TodosList from './components/todos-list';
import Filter from './components/filter';
import SearchCepContainer from "./components/search-cep";

function App() {
  return (
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
      <div>
        <Form />
        <TodosList />
        <Filter />
      </div>
      <div>
        <SearchCepContainer />
      </div>
    </div>
  );
}



export default App;
