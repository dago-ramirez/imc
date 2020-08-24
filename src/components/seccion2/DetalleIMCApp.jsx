import React, {Component} from 'react';
import CabeceraDetalle from './CabeceraDetalle';
import CuerpoDetalle from './CuerpoDetalle';

export default class DetalleIMCApp extends Component {
    constructor(props) {
        console.log(props)
        super(props);
        this.nombre = "Dago Ramirez";
        this.state = {
            numero : 10,
            edad : props.edad
        }
        this.sumar = this.sumar.bind(this);
        this.titulo = props.titulo;
    }

    render() {
        return (
            <div className="panel mb-6">
                <CabeceraDetalle titulo={this.titulo}/>
                <CuerpoDetalle tituloTabla={["IMC", "Situación"]}
                               calculoIMC={[["Menor a 18.5", "Bajo peso"],
                                            ["18.5 - 24.9", "Peso Normal"],
                                            ["25 - 26.9", "Sobre peso grado I"],
                                            ["27 - 29.9", "Sobre peso grado II"],
                                            ["30 - 34.9", "Obesidad de tipo I"],
                                            ["35 - 39.9", "Obesidad de tipo II"],
                                            ["40 - 49.9", "Obesidad de tipo III (Mórbida)"],
                                            ["Mayor a 50", "Obesidad de tipo IV (Extrema)"]]}/> 
            </div>
        );
    }

    sumar() {
        this.numero += 1;
        console.log(this.numero);
    }

    hola() {
        console.log("Hola desde la clase DetalleIMCApp");
    }
}