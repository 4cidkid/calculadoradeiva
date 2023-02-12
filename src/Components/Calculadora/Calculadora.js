import React from 'react'
import './Calculadora.css'



export default function Calculadora(){
    return(
        <div>
            <label htmlFor='monto'>Ingresa el monto:</label>
            <input id='monto' name='monto' type="number" />
        </div>
    )
}