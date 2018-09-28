import React from 'react';
import ListItem from './ListItem';

export default class GridMode extends React.Component {

    render() {
        const props = this.props;
        let i = 0;

        //Primeira posição do array é p header
        const hCols = props.levels[0].map(c => {
            return <th scope='col' key={i++}>{c}</th>
        });
        const btnAdd = <button className='btn btn-light'
            id={'btn_add'}
            //onClick={this.props.click}
            key={i++} >
            <img src={require('./../../icons/add.svg')} alt='add' />
        </button>
        const header = (
            <thead>
                <tr>
                    <th>{btnAdd}</th>
                    {hCols}
                </tr>
            </thead>
        );

        //Remover header
        const reg = props.levels;
        reg.shift();
        const body = reg.map(l => {
            return <ListItem cols={l} click={props.handleClick} id={i++} key={i} />;
        });

        const table =
            <table className='table table-hover'>
                {header}
                <tbody>{body}</tbody>
            </table>

        return (
            <div>
                {table}
            </div>
        );
    }
}