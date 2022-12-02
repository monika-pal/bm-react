import React from "react";
import Home from './components/Pages/Home/Home.js'
import About from './components/Pages/About/About.js'
const RouteLinks = [
  {
    path: "/",
    component: <Home/>
  },
  {
    path: "/Home",
    component: <Home/>
  },
  {
    path: "/about",
    component: <About/>
  },
];


export default RouteLinks;

