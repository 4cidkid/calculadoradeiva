import React, { useState } from "react";
import "./Calculadora.css";

export default function Calculadora() {
  const [monto, setMonto] = useState();
  const [finalPrice, setfinalPrice] = useState();
  function calculateIva(e) {
    if(parseInt(e.target.value) < 0){
        setMonto('El monto tiene que ser positivo');
        setfinalPrice('El monto tiene que ser positivo')
    }else{
        let liveMonto = e.target.value;
        liveMonto = liveMonto * 0.21;
        let calculateFinal = liveMonto? parseInt(e.target.value) + liveMonto:undefined
        setMonto(liveMonto);
        setfinalPrice(calculateFinal);
    }
  }
  return (
    <div className="calculadora">
      <div className="calculadora-container">
        <h1 id="main-title">Calculadora de IVA</h1>
        <div>
          <label htmlFor="monto">Ingresa el monto:</label>
          <input
            id="monto"
            name="monto"
            type="number"
            onChange={calculateIva}
          />
        </div>
        <label>El iva es: {monto !== 0 ? monto : undefined}</label>
        <label>El precio final es {finalPrice}</label>
      </div>
    </div>
  );
}
