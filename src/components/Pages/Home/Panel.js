import React, { Component } from 'react'
import ReactDOM from 'react-dom';
class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0
        };
    }
    componentDidMount() {
        window.setTimeout(() => {
            this.setState({
                width : 'calc(100vw - 315px)'
            });
        }, 333);
    }
    render() {
        const { label, heading,subheading,activeTab, index, activateTab } = this.props;
        const { width } = this.state;
        const isActive = activeTab === index;
        const innerStyle = {
            width: `${isActive ? width : 0}`
        }

        return (
            <div className='panel'
                role='tabpanel'
                aria-expanded={isActive}>
                <button className='panel__label'
                    role='tab'
                    onClick={activateTab}>
                    {label}
                </button>
                <div className='panel__inner'
                    style={innerStyle}
                    aria-hidden={!isActive}>
                    <h1 className='panel__heading'>
                        {heading}
                    </h1>
                    <h2 className='panel__Sub-heading'>
                        {subheading}
                    </h2>
                </div>
            </div>
        );
    }
}
export default Panel;