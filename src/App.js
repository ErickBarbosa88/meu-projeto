import React, { useState } from "react";

function getVowels(str) {
  var m = str.match (/[aeioãuíêôàú]/gi);
  return m === null ? 0 : m.length;
  
}

function getConso(str) {
  var c = str.match (/[bcçdqwrtypsdfghjklzxcvbnm]/gi);
  return c === null ? 0 : c.length;
  
}

function App() {
  const [textos, setTextos] = useState([]);
  const [texto, setTexto] = useState("");
  const handleChangeTexto = (evt) => {
    setTexto(evt.target.value);
  };
  const handleClickBtInserir = () => {
    let textoTrim = texto.trim();
    if (textoTrim) {
      setTextos([...textos, textoTrim]);
    }
    
    
  };
  return (
    <div className="App">
      <p>
        <label htmlFor="texto">Digite um texto: </label>
        <input
          id="texto"
          type="text"
          value={texto}
          onChange={handleChangeTexto}
        />{" "}
        <button onClick={handleClickBtInserir}>Inserir</button>
      </p>
      <table>
        <tr>
          <th>Texto</th>
          <th>vogais</th>
          <th>consoantes</th>
        </tr>
        </table>
        {textos.length > 0 &&
          textos.map((umTexto, index) => 
          <tr key={index}>
            <td>{umTexto}</td>
            <td>{getVowels(umTexto)}</td>
            <td>{getConso(umTexto)}</td>
          </tr>)}
    </div>
  );
}

export default App;






/*function getVowels(str) {
  var m = str.match (/[aeioãuíêôàú]/gi);
  return m === null ? 0 : m.length;
  
}

function getConso(str) {
  var c = str.match (/[bcçdqwrtypsdfghjklzxcvbnm]/gi);
  return c === null ? 0 : c.length;
  
}

function App() {
  const [texto, setTexto] = useState("");
  const handleChangeInputTexto = (evt) => {
    setTexto(evt.target.value);
  }

  return (
  <div className="App">
    <input type="text" value={texto} onChange={handleChangeInputTexto}/>
    <h3>Vogais: {getVowels(texto)}</h3>
    <h3>Consoantes: {getConso(texto)}</h3>

  </div>
  )

}
export default App;

/*import React, { useState } from "react";
import { ContadorRegex } from "./components/ContadorRegex";
import "./App.css";

function App() {
  const regexVogais = /[aáàãâeéêiíoóõôuú]/gi;
  const regexConsoantes = /[bcçdfghjklmnpqrstvwxyz]/gi;
  const [texto, setTexto] = useState("");
  const handleChangeInputTexto = (evt) => {
    setTexto(evt.target.value);
  };

  return (
    <div className="App">
      <input type="text" value={texto} onChange={handleChangeInputTexto} />
      <ContadorRegex titulo="Vogais" texto={texto} regex={regexVogais} />
      <ContadorRegex
        titulo="Consoantes"
        texto={texto}
        regex={regexConsoantes}
      />
    </div>
  );
}
*/