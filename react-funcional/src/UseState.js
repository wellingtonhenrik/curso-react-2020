import React from 'react'
import { useState } from 'react'

function UseState() {

  const [numero, setNumero] = useState();
  const [segundoNumero, setSegundoNumero] = useState();
  const [resultado, setResultado] = useState();

  const soma = () => {
    const numeroint = parseInt(numero);
    const segNumero = parseInt(segundoNumero);

    setResultado(numeroint + segNumero);
  }

  return (
    <div>
      Numero 1: <br />
      <input type='text' value={numero} onChange={e => setNumero(e.target.value)} />
      <br />Numero 2: <br />
      <input type='text' value={segundoNumero} onChange={e => setSegundoNumero(e.target.value)} /><br />
      <button onClick={soma}>Somar</button><br />
Resultado:<br />
      <input type='text' value={resultado} />
    </div>
  );
}

export default UseState;
