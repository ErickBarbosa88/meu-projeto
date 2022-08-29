import React, {useState} from "react";
import "./App.css";



function getVowels(str) {
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

export default App;*/