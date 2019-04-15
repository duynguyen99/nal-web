import React, { Component } from 'react';
import Header from './components/header/Header'
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
const products = [
  {
    image: 'FerrariLaFerrariAperta.jpg',
    name: 'Ferrari LaFerrari Aperta',
    price: '3.800.000$'
  },
  {
    image: 'McLarenP1LM.jpg',
    name: 'Mc Laren P1 LM',
    price: '3.700.000$'
  },
  {
    image: 'BugattiVisionGranTurismo.jpg',
    name: 'Bugatti Vision GranTurismo',
    price: '3.000.000$'
  },
  {
    image: 'IconaVulcanoTitanium.jpg',
    name: 'Icona Vulcano Titanium',
    price: '3.000.000$'
  },
  {
    image: 'Mercedes-AMGR50.jpg',
    name: 'Mercedes-AMGR50',
    price: '2.700.000$'
  },
  {
    image: 'BugattiChiron.jpg',
    name: 'Bugatti Chiron',
    price: '2.700.000$'
  },
  {
    image: 'FerrariFXX-K.jpg',
    name: 'Ferrari FXX-K',
    price: '3.070.000$'

  },
  {
    image: 'SestoElemento.jpg',
    name: 'Sesto Elemento',
    price: '2.999.000$'
  },
  {
    image: 'AventadorSvjRoadster.jpg',
    name: 'Aventador SVJ Roadster',
    price: '3.522.000$'
  },
  {
    image: 'HuayraBC.jpg',
    name: 'Huayra BC',
    price: '2.499.000$'
  }
];
class App extends Component {
  states = {
    data: products
  }
  render() {
    return (
      <div className="app">
        <Header />
        <Body
          data={this.states.data}
        />

        <Footer />
      </div>
    );
  }
}

export default App;
