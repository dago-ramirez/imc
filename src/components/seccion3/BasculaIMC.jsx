import React from 'react'
import Bascula from '../../imagenes/bascula-dibujo.png'

function basculoIMC() {
    return (
        <div className="column is-one-fifth ml-6">
            <figure className="image is-1by1">
                <img src={Bascula} alt="imagen-bascula" className="img-bascula"/>  
            </figure>
        </div>
    )
}

export default basculoIMC
