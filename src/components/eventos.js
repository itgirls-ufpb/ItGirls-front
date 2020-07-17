import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FotoNoticia from '../img/noticia-fundo1.jpeg'

class ColunaNoticias extends Component {
    render() {
      return (
        <div id="coluna-noticia">
          <div >
            <h2 className="tipo-noticia">{this.props.tipoNoticia}</h2>
          </div>
            <div >
              <figure className="foto-post">
                <img className="foto-noticias" src={FotoNoticia} width="90%" height="180px"/>
                <figcaption>
                  <h2 className="data-evento">21 de Janeiro de 2020</h2>
                  <h1 className="titulo-postagem">Este é o título da postagem</h1>
                </figcaption>
              </figure>
            </div>
          <div >
          <figure className="foto-post">
                <img className="foto-noticias" src={FotoNoticia} width="90%" height="180px"/>
                <figcaption>
                  <h2 className="data-evento">21 de Julho de 2020</h2>
                  <h1 className="titulo-postagem">Este é o título da postagem</h1>
                </figcaption>
              </figure>
          </div>
        </div>
      );
    };
};

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

  export default function FullWidthGrid() {
    const classes = useStyles();
  
    return (
      <div className={classes.root} id="eventos">
        <h1 className="titulo-container-eventos">Eventos</h1>  
        <div className="container-eventos">
            <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
            <ColunaNoticias tipoNoticia="Aconteceu no IT Girls" />
            <Button className="botao-eventos">Veja mais...</Button>
            </Grid>
            <Grid item xs={12} sm={6}>
            <ColunaNoticias tipoNoticia="Próximos Eventos" />
            <Button className="botao-eventos">Veja mais...</Button>
            </Grid>
            </Grid>
        </div>
      </div>
    );
  }