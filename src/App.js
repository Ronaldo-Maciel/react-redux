import React from 'react';
import style from './App.module.scss';

function App() {
  return (
    <div>
      <input type="text" />
      <ul>
        <li className={`${style['completed']}`}>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
        <li>item 4</li>
        <li>item 5</li>
      </ul>
      <h3>Mostrar</h3>
      <button>Todos</button>
      <button>Finalizados</button>
      <button>A fazer</button>
    </div>
  );
}

export default App;
