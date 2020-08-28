import React from 'react';
import FormularioCalculo from './FormularioCalculo';
import VerCalculo from './VerCalculoIMC';
import BasculaIMC from './BasculaIMC'

export default class CuerpoCalculo extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        let miCompontenVer = <VerCalculo altura={12} peso={8}/>
       
        return (
            <section className="panel-block">
                <article className="columns is-mobile">
                    <FormularioCalculo 
                        nombres={["oscar", "cristian", "sebastian", "monica", "andrea"]} 
                        notas={{nota1:2,nota2:3,nota3:5}}
                        html={<input type="number"/>}
                        sumarNumeros={(n1,n2) => {
                            let suma = n1 + n2;
                            return suma;
                        }}
                        miCompontenVer = {miCompontenVer}
                        test = {this}
                    />
                    {miCompontenVer}
                    <BasculaIMC/>
                </article>
            </section> 
        )
    }
}
