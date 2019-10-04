import React, { Component } from 'react';
import Pelicula from './Pelicula';

class Peliculas extends Component {

    state = {};

    cambiarTitulo = () => {
        var { peliculas } = this.state;
        peliculas[0].titulo = 'Batman Begins';
        this.setState({
            peliculas: peliculas
        })
    }

    favorita = (pelicula) => {
        console.log(pelicula);
        this.setState({
            favorita: pelicula
        })
    }

    componentWillMount(){
        this.setState({
            peliculas: [
                { titulo: 'Batman vs Superman', image: 'https://cnnespanol2.files.wordpress.com/2019/04/avengers-endgame-poster-records.jpg?quality=100&strip=info&strip=info' },
                { titulo: 'Gran Torino', image: 'https://cnnespanol2.files.wordpress.com/2019/04/avengers-endgame-poster-records.jpg?quality=100&strip=info&strip=info' },
                { titulo: 'Looper', image: 'https://cnnespanol2.files.wordpress.com/2019/04/avengers-endgame-poster-records.jpg?quality=100&strip=info&strip=info' }
            ],
            nombre: 'Alberto Cárdenas',
            favorita: {}
        })
    }

    render() {
        return (
            <div id='content' className="peliculas">
                <h2>Peliculas</h2>
                <p>Selección de las peliculas de {this.state.nombre}</p>
                <button onClick={this.cambiarTitulo}>Cambiar titulo de batman</button>

                {this.state.favorita.titulo ? (
                    <p className="favorita">
                        <strong>La pelicula favorita es: </strong>
                        <span>{this.state.favorita.titulo}</span>
                    </p>
                ) : (
                    <p>No hay pelicula favorita</p>
                )
                }

                <div id="articles" className="peliculas">
                    {
                        this.state.peliculas.map((pelicula, i) => {
                            return (
                                <Pelicula
                                    key={i}
                                    pelicula={pelicula}
                                    marcarFavorita={this.favorita}></Pelicula>
                            )
                        })
                    }
                </div>

            </div>
        );
    }

}

export default Peliculas;