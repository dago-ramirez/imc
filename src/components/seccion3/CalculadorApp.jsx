import React from 'react';
import Cabecera from './CabeceraCalculo';
import Cuerpo from './CuerpoCalculo'
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