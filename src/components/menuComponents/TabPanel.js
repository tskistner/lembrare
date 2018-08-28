import React from 'react';
import { Link } from 'react-router-dom';

export default class TabPanel extends React.Component {
    render() {
        return React.createElement('li',
            {className: "nav-item"}, 
            <Link className='nav-link' to={this.props.link}> {this.props.tabName} </Link>);
    }
}