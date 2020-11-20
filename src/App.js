import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/navbar/Navbar'
import FirmaComponent from './components/firma/FirmaComponent'
import BuscarCancion from './components/busqueda/BuscarCancion'
import ListaMusicComponent from './components/listamusic/ListaMusicComponent'
// estilos
import './app.scss'


import { Row, Col } from 'react-bootstrap';

import { Provider } from 'react-redux'
import store from './store'



class App extends Component {


  constructor() {
    super()
    this.state = {
      firma: []  //inicia con un arreglo vacio
    }
  }

  addFirma(firma) {
    this.setState({
      firma: [...this.state.firma, firma]
    })
  }

  render() {
    return (

      <Provider store={store}>
        {/* music list navbar */}
        <Row><Col className="menu_navegacion"><Nav /></Col></Row>
        {/* //introducir firma-listar canciones-mostrar firma */}
        <Row>

          <Col className="lista_musica">
            <Row> <Col className="firma_component"> <FirmaComponent /></Col></Row>
          </Col>
          <Col className="buscar_cancion"><Row><BuscarCancion/></Row></Col>
          <Col><Row><ListaMusicComponent /></Row> </Col>
        </Row>


      </Provider>
    )


  }

}

export default App;
