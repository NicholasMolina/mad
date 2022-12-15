import { Component } from 'react';
import Productos from './components/Productos'

class App extends Component{
  state = {
    productos: [
      { name: 'Caja sorpresa', price: 1500, img: '/productos/box.jpg'},
      { name: 'Luffytaro', price: 1500, img: '/productos/funko.jpg'},
      { name: 'Monopoly', price: 1500, img: '/productos/Monopoly.jpg'},
    ]
  }


  render() {
    return(
      <div>
        <Productos 
          agregarAlCarro={() => console.log('No hace nadi')}
          productos={this.state.productos}>
        </Productos>
      
      </div>
    )
  }
}


export default App;
