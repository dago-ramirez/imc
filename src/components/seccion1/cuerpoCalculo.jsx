import React from 'react';
import Formulario from './formularioCalculo';
import Calculo from './verCalculoIMC';
import Bascula from './basculaIMC'

function cuerpocalculo({props}) {
    return (
        <section className="panel-block">
            <article className="columns is-mobile">
                <Formulario nombres={["Dago", "Oscar", "Camilo", "Juan"]}
                            notas={{nota1:2,nota2:3,nota3:5}}
                            html={<input type="number"/>}
                            sumarNumeros={(n1,n2) => {
                                let suma = n1 + n2;
                                return suma;
                            }}/>
                <Calculo altura={80} peso={63}/>
                <Bascula/>  
            </article>
        </section>
    )
}

export default cuerpocalculo
