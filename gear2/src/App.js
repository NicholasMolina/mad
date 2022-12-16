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
      
    ]
  }


  render() {
    return(
      <div>
        <Navbar/>
        <Layout>
          <Title/>
          <Productos 
            agregarAlCarro={() => console.log('No hace nadi')}
            productos={this.state.productos}>
          </Productos>
        </Layout>
        
      
      </div>
    )
  }
}


export default App;
