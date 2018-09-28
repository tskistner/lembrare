import React from 'react';
import { Link } from 'react-router-dom';
import MenuItem from './menuComponents/MenuItem';
import DropDownMenu from './menuComponents/DropDownMenu';

export default class MenuContainer extends React.Component {
    render() {
        const menuItens = [];
        if (this.props.itens) {
            for (let i = 0; i < this.props.itens.length; i++) {
                const item = this.props.itens[i];
                if (item.type === 'dropdown') {
                    menuItens.push(<DropDownMenu key={i}
                        itemName={item.itemName}
                        options={item.options} />);
                } else {
                    menuItens.push(<MenuItem key={i}
                        itemName={item.itemName}
                        index={i}
                        link={item.link} />);
                }
            }
        }
        return (
            <nav className='navbar navbar-expand-lg default'>
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    {React.createElement('ul', { className: 'navbar-nav mr-auto' }, menuItens)}
                </div>
                <div className='navbar-brand'>
                 <Link className='nav-link default' to={`${process.env.PUBLIC_URL}/`}> Lembrare </Link>
                </div>
            </nav>
        );
    }
}