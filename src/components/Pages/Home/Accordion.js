import React, { Component } from 'react'
import Panel from './Panel';
export default class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
    this.activateTab = this.activateTab.bind(this);
  }
  activateTab(index) {
    this.setState(prev => ({
      activeTab: prev.activeTab === index ? -1 : index
    }));
  }
  render() {
    const { activeTab } = this.state;
    const panels = [
      {
        label: 'A​',
        heading: 'A',
        subheading : 'A​',
      },
      {
        label: 'B',
        heading: 'B',
        subheading : 'B',
      },	
      {
        label: 'C',
        heading: 'C',
        subheading : 'C',
      },	
    ];
    return (
      <div className='accordion' role='tablist'>
        {panels.map((panel, index) =>
          <Panel
            key={index}
            activeTab={activeTab}
            index={index}
            {...panel}
            activateTab={this.activateTab.bind(null, index)}
          />
        )}
      </div>
    );
  }
}

export { Accordion };