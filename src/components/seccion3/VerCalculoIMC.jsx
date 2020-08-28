import React from 'react';
import { toast } from "bulma-toast";
// import PropTypes from 'prop-types';

function verCalculoIMC(props) {
    let imc = calcularIMC(props)
    return (
        <div className="column">
            <h3 className="has-text-weight-bold is-size-3">IMC</h3>
            <h3 className="has-text-weight-bold is-size-3">{imc}</h3>
        </div>
    );
}

function calcularIMC({altura, peso}) {
    try {
        let peso = document.querySelector("#peso").value;
        let altura = document.querySelector("#altura").value;
        let imc = peso / altura;
        if(!isNaN(imc)) {
            console.log("Entro", imc);
            return imc;
        } else {
            throw Error("Valor imc inválido")
        }
    } catch (error) {
        
    }
}

export default verCalculoIMC
