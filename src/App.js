import './App.css';
import React from 'react';
import { Titulo } from './components/Titulo';

function App() {
  let idade = 23;
  return (
      <div>
    <div className="App">
      <Titulo txt="Nome: Maria"/>
      <Titulo txt={`Idade = ${idade}`}/>
      <h1>Olá mundo, idade = {idade}</h1>
      <h1>Hello World</h1>
      <h2>Teste</h2>
      <h2>Teste</h2>
    </div>
    <div>DIV 2

    </div>
    </div>
  );
}

export default App;
