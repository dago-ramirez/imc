import React from 'react';
// import PropTypes from 'prop-types';

function verCalculoIMC(props) {
    let imc = calcularIMC(props)
    return (
        <div className="column">
            <h3 className="m-6 has-text-weight-bold is-size-1">IMC</h3>
            <h3 className="m-6 has-text-weight-bold is-size-1">{imc}</h3>
        </div>
    );
}

function calcularIMC({altura, peso}) {
    return peso / altura;
}

// VerCalculoIMC.propTypes = {
//     peso : PropTypes.number.isRequired,
//     altura : function(props, propName, componentName) {
//         if(props.altura < 10 || props.altura > 20){
//             return new Error(
//                 'La propiedad `' + propName + '` en el componente' +
//                 ' `' + componentName + '`. No se encuentra en el rango de  10 - 20.'
//               );
//         }
//     },
// };

export default verCalculoIMC
