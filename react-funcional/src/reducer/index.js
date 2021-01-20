import React from 'react'
import { useState, useEffect } from 'react'
import useStore from './somaReducer'

function ReducerHook() {

  const [numero, setNumero] = useState('');
  const [segundoNumero, setSegundoNumero] = useState('');
const [store,dispach] = useStore();

  const soma = () => {
    const numeroInt = parseInt(numero);
    const segNumeroInt = parseInt(segundoNumero);
    dispach({
        type:'SOMA',
        payload: numeroInt + segNumeroInt
    })
  }


  const subtrair = () => {
    const numeroInt = parseInt(numero);
    const segNumeroInt = parseInt(segundoNumero);
    dispach({
        type:'SUBTRAIR',
        payload: numeroInt - segNumeroInt
    })
  }

  return (
    <div>
      Numero 1: <br />
      <input type='text' value={numero} onChange={e => setNumero(e.target.value)} />
      <br />Numero 2: <br />
      <input type='text' value={segundoNumero} onChange={e => setSegundoNumero(e.target.value)} /><br />
      <button onClick={soma}>Somar</button><br />
      <br/><button onClick={subtrair}>Subtrair</button><br />

Resultado:<br />
      <input type='text' value={store.resultado} readOnly/>
    </div>
  );
}

export default ReducerHook;
