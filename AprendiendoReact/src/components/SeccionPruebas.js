import React, { Component } from 'react';
import MiComponente from './MiComponente';

class SeccionPruebas extends Component {

    contador = 0;

    constructor(props){
        super(props);

        this.state = {
            contador: 0
        };
    }

    HolaMundo(nombre, edad) {
        var presentacion = (
          <div>
            <h2>Hola, soy {nombre}</h2>
            <h3>Tengo {edad} años</h3>
          </div>
        );
        return presentacion;
      }
    sumar = (e) => {
        // this.contador = this.contador+1;
        this.setState({
            contador: (this.state.contador + 1)
        });
    }

    restar = (e) => {
        // this.contador = this.contador-1;
        this.setState({
            contador: (this.state.contador - 1)
        });
    }

    render() {
        var nombre = "Alberto Cárdenas";
        var edad = 30;
        return (
            <section id="content">
                <h2 className="subheader">Últimos artículos</h2>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                {this.HolaMundo(nombre, edad)}
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <section className="componentes">
                    <MiComponente></MiComponente>
                    <MiComponente></MiComponente>
                </section>

                <h2 className="subheader">Estado</h2>
                <p>
                    Contador: {this.state.contador}
                </p>
                <p>
                    <input type="button" value="Sumar" onClick={this.sumar}></input>
                    <input type="button" value="Restar" onClick={this.restar}></input>
                </p>

            </section>
        )
    }
}

export default SeccionPruebas;