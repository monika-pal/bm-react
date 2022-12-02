import React, { Component } from 'react'
import Accordion from './Accordion'
import './Home.scss';
export default class Home extends Component {
  
  render() {

    return (
      <div>
        <nav className="container-none md:container lg:container mx-auto py-5 px-3">
        <div className="flex">
  <div className="w-1/3">01</div>
   <div className="w-2/3">
  <Accordion/>
  </div>
</div>
     
        </nav>
      </div>
    )
  }
}
