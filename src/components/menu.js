import React, {Component} from 'react';
import logoMenu from '../img/cropped-logo_horizontal2-1 1.svg'

export default class MenuITGirls extends Component {
  render() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" id="menu-it">
  <a className="navbar-brand" href="#"><img src={logoMenu} width="60%" /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Conheça-nos</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Equipe</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">IT Recomenda</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Eventos</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Lojinha</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Acompanhe-nos</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Fale Conosco</a>
      </li>
    </ul>
  </div>
</nav>
        </div>
    );
  };
};