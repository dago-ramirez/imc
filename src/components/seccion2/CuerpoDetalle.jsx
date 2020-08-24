import React from 'react'

function CuerpoDetalle(props) {
    let {
        tituloTabla,
        calculoIMC
    } = props;
    return (
        // <section className="panel-block">
            <div className="columns is-mobile panel-block">
                <div className="column is-half is-offset-one-quarter">
                    <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                        <thead>
                            <tr>
                                {tituloTabla.map((element, index) => {
                                    return (
                                        <th className="has-text-centered" key={index}>{element}</th>
                                    );
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {calculoIMC.map((element, index) => {
                                    return (
                                        <tr key={index}><td >{element[0]}</td><td className="has-text-centered">{element[1]}</td></tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>                
                </div>        
            </div>
        // </section>
    );
}

export default CuerpoDetalle;
