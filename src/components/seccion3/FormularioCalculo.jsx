import React from 'react';
import PropTypes from 'prop-types';

class FormularioCalculo extends React.Component{

    // constructor(props){
    //     super(props);
    // }

    calcularIMC(e){
        let peso = document.querySelector("#peso").value;
        let altura = document.querySelector("#altura").value;
        console.log(peso / altura);
    }

    render() {

        return (
            <div className="column is-two-fifths">
                <div className="field">
                    <label className="label" htmlFor="peso">Peso (kilos)</label>
                    <div className="control">
                        <input className="input" type="number" name="peso" id="peso" placeholder="Ingrese el peso"/>
                    </div>
                </div>
                <div className="field">
                    <label className="label" htmlFor="altura">Altura (cm)</label>
                    <div className="control">
                        <input className="input" type="number"  name="altura" id="altura" placeholder="Ingrese la altura"/>
                    </div>
                </div>
                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-link" onClick={this.calcularIMC}>Calcular</button>
                    </div>
                </div>
            </div>
        )
    }
}

FormularioCalculo.propTypes = {
    html : PropTypes.element.isRequired,
    nombres : PropTypes.array.isRequired,
    notas : PropTypes.object.isRequired,
    sumarNumeros : PropTypes.func.isRequired,
}

export default FormularioCalculo
