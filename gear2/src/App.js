import { Component } from 'react'
import './App.css';
import Productos from './components/Productos'
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar'

class App extends Component{
  state = {
    productos: [
      { name: 'Caja sorpresa', price: 1500, img: '/productos/box.jpg'},
      { name: 'Luffytaro', price: 1500, img: '/productos/funko.jpg'},
      { name: 'Monopoly', price: 1500, img: '/productos/Monopoly.jpg'},    
    ],
    carro:[ ],
  }

  agregarAlCarro = (producto) => {
    const { carro } = this.state
    if (carro.find(x => x.name === producto.name)) {
      const newCarro = carro.map(x => x.name === producto.name
        ? ({
          ...x,
          cantidad: x.cantidad + 1
        })
        : x)
        return this.setState({ carro: newCarro})
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      })
    })
  }

  render() {
    return(  
      <div>  
        <Navbar carro={this.state.carro}/>
        <Layout>
          <Title/>
          <Productos 
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}>
          </Productos>
        </Layout>
      </div>
    )
  }
}


export default App;
