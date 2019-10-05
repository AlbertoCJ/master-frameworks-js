import React, { Component } from 'react';
import axios from 'axios';
import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from './Articles';

class Blog extends Component {
    render() {
        return (
            <div id="home">
                <Slider title="Blog" size="slider-small"></Slider>
                <div className="center"></div>
                <div id="content">
                    {/**  Listado de articulos que vendran de la api */}
                    <Articles></Articles>
                </div>
                <Sidebar blog="true"></Sidebar>
            </div >
        );
    }
}

export default Blog;