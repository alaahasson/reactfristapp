import React, { Component } from 'react'
import Home from "../src/Component/Home/Home";
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import Portfolio from './Component/Portfolio/Portfolio';
export default class App extends Component {
  render() {
    return (
      <>
     <Home/>
     <Portfolio/>
     <About/>
     <Contact/>
     <Footer/>
      
      </>
    )
  }
}
