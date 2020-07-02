import React, {Component} from 'react';
import Photo from '../img/photo.png'

class ColunaNoticias extends Component {
    render() {
      return (
        <div className="col">
            <h1>Tipo de Notícia</h1>
            <LinhaNoticia/>
            <LinhaNoticia/>
            <LinhaNoticia/>
        </div>
      );
    };
};

class LinhaNoticia extends Component {
    render() {
      return (
        <div className="row" id="news-box">
            <div className="col">
                <img src={Photo} className="news-icon"></img>
            </div>
            <div className="col">
                <div className="row"><h2>Título</h2></div>
                <div className="row"><h3>19-01-2020</h3></div>
            </div>
        </div>
      );
    };
};



export default class News extends Component {
    render() {
      return (
        <div className="container">
            <h1 className="titulo-noticia">NOTÍCIAS</h1>
            <div id="news-row">
              <div className="row" id="inside-box-news">
                  <ColunaNoticias/>
                  <ColunaNoticias/>
              </div>
            </div>
        </div>
      );
    };
  };