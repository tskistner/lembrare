import React from 'react';
import { Link } from 'react-router-dom';

export default class LinkMenu extends React.Component {

    onOverMenuItem(event) {
        document.getElementById(event.currentTarget.id).classList.add('selected-menu');
    }

    onLeaveMenuItem(event) {
        document.getElementById(event.currentTarget.id).classList.remove('selected-menu');
    }

    render() {
        return(
            <Link className='nav-link default' to={this.props.to} id={this.props.to}
                onMouseOver={this.onOverMenuItem} 
                onMouseLeave={this.onLeaveMenuItem}> 
                {this.props.name} 
            </Link>
        );
    }

}