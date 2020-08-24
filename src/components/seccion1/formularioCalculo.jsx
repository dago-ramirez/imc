import React from 'react';
import PropTypes from 'prop-types';

function formularioCalculo() {
    return (
        <article className="column is-two-fifths mr-6">
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
        </article>
    )
}

formularioCalculo.propTypes = {
    html : PropTypes.element.isRequired,
    nombres : PropTypes.array.isRequired,
    notas : PropTypes.object.isRequired,
    sumarNumeros : PropTypes.func.isRequired,
}

export default formularioCalculo
