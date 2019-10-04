import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';

class Formulario extends Component {
    render() {
        return (
            <div id="formulario">
                <Slider title="Formulario" size="slider-small"></Slider>
                <div className="center"></div>
                <div id="content">
                    {/**  Listado de articulos que vendran de la api */}
                </div>
                <Sidebar blog="false"></Sidebar>
            </div >
        );
    }
}

export default Formulario;