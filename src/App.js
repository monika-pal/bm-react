import React, { Component } from 'react'
import Header from './components/Layout/Header/Header.js'
import Footer from './components/Layout/Footer/Footer.js'
import RouteLinks from './RouteConfig'
import { Routes,Route,BrowserRouter } from 'react-router-dom';
export default class App extends Component {
  render() {
    const routeComponents = RouteLinks.map(({ path, component }, key) => <Route exact path={path} element={component} key={key} />);
    return (
      <BrowserRouter>
        <Header />
        <Routes>
        {routeComponents}
        </Routes>
        <Footer />
      </BrowserRouter>
    )
  }
}
