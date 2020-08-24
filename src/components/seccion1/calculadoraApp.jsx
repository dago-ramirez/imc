import React from 'react';
import Cabecera from './cabeceraCalculo';
import Cuerpo from './cuerpoCalculo'
function MiComponente() {
    return (
        <section className="panel">
            <Cabecera titulo="Calculadora"
                      />
            <Cuerpo/>
        </section>
    );
}

export default MiComponente;