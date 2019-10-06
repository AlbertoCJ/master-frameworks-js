import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Pelicula extends Component {

    marcar = () => {
        this.props.marcarFavorita(this.props.pelicula);
    }
    render() {
        const pelicula = this.props.pelicula;

        return (
            <article className="article-item" id="article-template">
                <div className="image-wrap">
                    <img src={pelicula.image} alt={pelicula.titulo} />
                </div>

                <h2>{pelicula.titulo}</h2>
                <span className="date">
                    Hace 5 minutos
                                    </span>
                <Link to="/blog">Leer más</Link>
                <button onClick={this.marcar}>Marcar como favorita</button>

                <div className="clearfix"></div>
            </article>
        );
    }
}

export default Pelicula;