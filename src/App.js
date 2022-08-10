import logo from './logo.svg';
import './App.css';
import { Titulo } from './components/Titulo';


function App() {
  let idade = 23;
  return (
      <div>
    <div className="App">
      <Titulo txt="Nome: Maria"/>
      <Titulo txt={`Idade = ${idade}`}/>
      <h1>Olá mundo, idade = {idade}</h1>
      <h1>ola</h1>
    </div>
    <div>DIV 2

    </div>
    </div>
  );
}

export default App;
