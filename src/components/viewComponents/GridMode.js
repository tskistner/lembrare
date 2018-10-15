import React from 'react';
import ListItem from './ListItem';

export default class GridMode extends React.Component {

    render() {
        const props = this.props;
        let i = 0;

        //Construir o cabeçalho
        const headerColumns = props.header.map(h => {
            return <th scope='col' key={i++}>{h}</th>
        });

        //Botão de adicionar registro
        const btnAdd = (
            <button className='btn btn-light'
                id={'btn_add'}
                onClick={props.onNewRecord}
                key={i++} >
                <img src={require('./../../icons/add.svg')} alt='add' />
            </button>
        );

        const header = (
            <thead>
                <tr>
                    <th>{btnAdd}</th>
                    {headerColumns}
                </tr>
            </thead>
        );

        //Criar linhas
        const body = props.registers.map((l, i) => {
            return <ListItem columns={l} 
                onEdit={props.onEdit} 
                onDelete={props.onDelete}
                id={i++} 
                key={i} />;
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