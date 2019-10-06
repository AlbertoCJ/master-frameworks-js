import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import SeccionPruebas from './components/SeccionPruebas';
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';
import Error from './components/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Blog from './components/Blog';
import Formulario from './components/Formulario';
import Search from './components/Search';
import Article from './components/Article';
import CreateArticle from './components/CreateArticle';
import EditArticle from './components/EditArticle';

class Router extends Component {
    render() {
        return (
            < BrowserRouter >
                <Header></Header>
                {/* CONFIGURAR RUTAS Y PÁGINAS */}
                < Switch >
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/blog" component={Blog} />
                    <Route exact path="/blog/articulo/:id" component={Article} />
                    <Route exact path="/blog/crear" component={CreateArticle} />
                    <Route exact path="/blog/editar/:id" component={EditArticle} />
                    <Route exact path="/blog/busqueda/:search" component={Search} />
                    <Route exact path="/redirect/:search" render={(props) => {
                        var search = props.match.params.search;
                        return (
                        <Redirect to={'/blog/busqueda/' + search}></Redirect>
                        )
                    }} />
                    <Route exact path="/formulario" component={Formulario} />
                    <Route exact path="/pagina-1" component={Peliculas} />
                    <Route exact path="/ruta-prueba" component={SeccionPruebas} />
                    <Route exact path="/segunda-ruta" component={MiComponente} />
                    <Route exact path="/pagina-prueba" render={() => (
                        <React.Fragment>
                            <h1>Hola mundo desde la ruta: PAGINA 1</h1>
                            <h2>Holaaaaaaaa</h2>
                        </React.Fragment>
                    )} />
                    <Route exact path="/pruebas/:nombre" render={(props) => {
                        var nombre = props.match.params.nombre;
                        return (
                            <div id="content">
                                <h1 className="subheader">Página de prubas</h1>
                                <h2>{nombre}</h2>
                            </div>
                        );
                    }
                    }></Route>
                    <Route component={Error} />
                </Switch >
                <div className="clearfix"></div>
                <Footer></Footer>
            </BrowserRouter >

        )
    }
}

export default Router;