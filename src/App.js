import React, { Component } from 'react'
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Header from './components/Layout/Header/Header.js'
import Footer from './components/Layout/Footer/Footer.js'
import Home from  './components/Pages/Home/Home.js'
import About from  './components/Pages/About/About.js'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Header/>
      <main>
      <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/About" element={<About/>}></Route>
    </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
    )
  }
}
