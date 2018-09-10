import React from 'react';
import { Link } from 'react-router-dom';

export default class DropDownMenu extends React.Component {
    render() {
        const itens = [];
        if (this.props.options) {
            for (let i = 0; i < this.props.options.length; i++) {
                itens.push(
                    <Link className='dropdown-item' key={i}
                        to={this.props.options[i].link}>
                        {this.props.options[i].itemName}
                    </Link>
                );
            }
        }
        return (
            <li className='nav-item dropdown'>
                <a className='nav-link dropdown-toggle' id='navbarDropdown' role='button'
                    data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                    {this.props.itemName}</a>
                <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                    {itens}
                </div>
            </li>
        );
    }
}