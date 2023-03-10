import React, { useState } from "react";
import "./Calculadora.css";

export default function Calculadora() {
  const [monto, setMonto] = useState(0);
  const [finalPrice, setfinalPrice] = useState(0);
  const [show, setShow] = useState(false);
  const [finput, setfInput] = useState(0);
  function validateInput(e) {
    e.target.value = e.target.value
      .replace(/[^0-9.]/g, "")
      .replace(/(\..*)\./g, "$1");
    if (e.target.value.length > 16) {
      e.target.value = '';
    }
  }
  function returnInputFormated(e) {
    return new Intl.NumberFormat("es-CL", {
      currency: "CLP",
      style: "currency",
    }).format(e);
  }
  function formatNumber(num) {
    let numberFormated = num;
    return new Intl.NumberFormat("es-CL", {
      currency: "CLP",
      style: "currency",
    }).format(numberFormated);
  }
  function calculateIva(e) {
    if (e.target.value.length !== 0) {
      setShow(true);
      setfInput(returnInputFormated(e.target.value));
    } else {
      setShow(false);
    }
    if (e.target.value < 0) {
      setMonto(0);
      finalPrice(0);
    } else {
      let liveMonto = e.target.value;
      liveMonto = liveMonto * 0.21;
      let calculateFinal = liveMonto
        ? parseInt(e.target.value) + liveMonto
        : undefined;
      setMonto(formatNumber(liveMonto.toFixed(0)));
      setfinalPrice(
        calculateFinal ? formatNumber(calculateFinal.toFixed(0)) : 0
      );
    }
  }
  return (
    <div className="calculadora">
      <div className="calculadora-container">
        <h1 id="main-title">Calculadora de IVA</h1>
        <div className="monto-container">
          <label htmlFor="monto">Ingresa el monto:</label>
          <input
            id="monto"
            name="monto"
            type="number"
            onChange={calculateIva}
            onInput={validateInput}
          />
        </div>
        <div className={show == true ? "result displayme" : "dontdisplayme"}>
          <label>Monto ingresado:</label>
          <h2 style={{ margin: "0px" }}>{finput}</h2>
        </div>
        <div className="result">
          <label>El iva es:</label>
          <h2 style={{ margin: "0px" }}>{monto ? monto : "$0"}</h2>
        </div>
        <div className="result">
          <label>El precio final es:</label>
          <h2 style={{ margin: "0px" }}>{finalPrice ? finalPrice : "$0"}</h2>
        </div>
      </div>
    </div>
  );
}
