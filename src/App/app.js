import React from 'react';
import './app.css';
import { NavBar } from '../NavBar/NavBar';
import { Gallery } from '../Gallery/Gallery';
import { Menu } from '../Menu/Menu';
import { Reviews } from '../Reviews/Reviews';
import { About } from '../About/About';
import { Footer } from '../Footer/Footer';
import { Home } from '../Home/Home';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'Home'
    }

    this.setPage = this.setPage.bind(this);
  }

  setPage(page) {
    this.setState({currentPage: page})
  }

  render() {
    return (
      <div className="App">
        <NavBar setPage={this.setPage}/>
        {this.state.currentPage === 'Home' && <Home />}
        {this.state.currentPage === 'About' && <About />} 
        {this.state.currentPage === 'Gallery' && <Gallery />}
        {this.state.currentPage === 'Menu' && <Menu />}
        {this.state.currentPage === 'Reviews' && <Reviews />}
        <Footer />  
      </div>
    );
  }
}

export default App;
