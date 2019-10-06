import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import Moment from 'react-moment';
import 'moment/locale/es';
import axios from 'axios';
import swal from 'sweetalert';
import Global from '../Global';
import Sidebar from './Sidebar';
import imgDefault from '../assets/images/default.jpg';

class Article extends Component {

    url = Global.url;

    state = {
        article: false,
        status: null
    }

    componentWillMount() {
        this.getArticle();
    }

    getArticle = () => {
        var id = this.props.match.params.id;

        axios.get(this.url + 'article/' + id).then(res => {
            this.setState({
                article: res.data.article,
                status: 'success'
            });
        }).catch(err => {
            this.setState({
                article: false,
                status: 'success'
            });
        });
    }

    deleteArticle = (articleId) => {

        swal({
            title: "¡Estas seguro?",
            text: "Una vez eliminado, no podrá volver atrás!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                axios.delete(this.url + 'article/' + articleId).then(res => {
                    this.setState({
                        article: res.data.article,
                        status: 'deleted'
                    });
        
                    swal(
                        'Artículo borrado',
                        'El artículo ha sido borrado correctamente',
                        'success'
                    )
                });
            } else {
                swal(
                    'Tranquilo',
                    'No se ha borrado nada',
                    'success'
                )
            }
          });
    }

    render() {
        var article = this.state.article;

        if (this.state.status === 'deleted') {
            return <Redirect to="/blog"></Redirect>
        }

        return (
            <div className="center">
                <section id="content">

                    {this.state.article &&
                        <article className="article-item article-detail">
                            <div className="image-wrap">
                                {
                                    article.image !== null ? (
                                        <img src={this.url + 'get-image/' + article.image} alt={article.title} />
                                    ) : (
                                            <img src={imgDefault} alt={article.title} />
                                        )

                                }
                            </div>

                            <h1 className="subheader">{article.title}</h1>
                            <span className="date">
                                <Moment locale="es" fromNow>{article.data}</Moment>
                            </span>
                            <p>
                                {article.content}
                            </p>

                            <Link to={'/blog/editar/' + article._id} className="btn btn-warning">Editar</Link>
                            <button className="btn btn-danger" onClick={
                                () => {
                                    this.deleteArticle(article._id)
                                }
                            }>Eliminar</button>  

                            <div className="clearfix"></div>
                        </article>
                    }

                    {!this.state.article && this.state.status === 'success' &&
                        <div id="article">
                            <h2 className="subheader">El artículo no existe</h2>
                            <p>Intentalo de nuevo más tarde</p>
                        </div>
                    }

                    {this.state.status == null &&
                        <div id="article">
                            <h2 className="subheader">Cargando...</h2>
                            <p>Espere unos segunos</p>
                        </div>
                    }
                </section>

                <Sidebar></Sidebar>

                <div className="clearfix"></div>
            </div>
        )
    }
}

export default Article;