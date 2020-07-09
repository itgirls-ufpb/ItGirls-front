import React, {Component} from 'react';
import FotoNoticia from '../img/noticia-fundo1.jpeg'

class ColunaNoticias extends Component {
    render() {
      return (
        <div className="col" id="coluna-noticia">
          <div className="row">
            <h2 className="tipo-noticia">{this.props.tipoNoticia}</h2>
          </div>
          <div className="row"><img className="foto-noticias" src={FotoNoticia} width="100%" height="300px"/></div><br/><br/>
          <div className="row"><img className="foto-noticias" src={FotoNoticia} width="100%" height="300px"/></div>
        </div>
      );
    };
};

class LinhaNoticia extends Component {
    render() {
      return (
        <div>

        </div>
      );
    };
};

export default class News extends Component {
    render() {
      return (
        <>
          <h1 className="titulo-container">NOTÍCIAS</h1>        
        <div className="row" id="box-conteudo">
          <ColunaNoticias tipoNoticia="Próximos Eventos" />
          <ColunaNoticias tipoNoticia="Aconteceu no IT Girls" />  
        </div>
        </>
      );
    };
  };