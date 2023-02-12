import React, { useState } from 'react'
import './Calculadora.css'



export default function Calculadora(){
    const[monto,setMonto] = useState()
    const[finalPrice, setfinalPrice] = useState()
    function calculateIva(e){
        let liveMonto = e.target.value;
        liveMonto = liveMonto * 0.21;
        let calculateFinal = parseInt(e.target.value) + liveMonto
        setMonto(liveMonto)
        setfinalPrice(calculateFinal)
    }
    return(
        <div>
            <h1>Calculadora de IVA</h1>
            <label htmlFor='monto'>Ingresa el monto:</label>
            <input id='monto' name='monto' type="number" onChange={calculateIva} />
            <label>El iva es: {monto !== 0 ? monto : undefined}</label>
            <label>El precio final es {finalPrice}</label>
        </div>
    )
}
