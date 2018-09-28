import React from 'react';
import { Link } from 'react-router-dom';

export default class DropDownMenu extends React.Component {
    render() {
        const properties = this.props;
        const itens = properties.options.map((o, i) => {
            return <Link
                className='dropdown-item'
                key={i}
                to={o.link}> {o.itemName}
            </Link>
        });

        return (
            <div className='dropdown'>
                <button className='btn btn-secondary dropdown-toggle default'
                    type='button' id='dropdownMenuButton' data-toggle='dropdown'
                    aria-haspopup='true' aria-expanded='false'>
                </button>
                <div className='dropdown-menu' aria-labelledby="dropdownMenuButton">
                    {itens}
                </div>
            </div>

        );
    }
}