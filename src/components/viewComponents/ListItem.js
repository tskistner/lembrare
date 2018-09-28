import React from 'react';

export default class ListItem extends React.Component {

    onDelete() {
        console.log('deletando');
    }

    render() {
        let indice = this.props.id;
        const columns = this.props.cols.map(c => {
            return <td key={indice++}>{c}</td>; 
        });

        const btnEdit = <button className='btn btn-light'
            id={'btn_edit_' + this.props.id}
            onClick={this.props.click.bind(this)}
            key={indice++} >
            <img src={require('./../../icons/edit.svg')} alt='delete' />
        </button>;

        const btnDelete = <button className='btn btn-light'
            id={'btn_delete_' + this.props.id}
            onClick={this.onDelete}
            key={indice++} >
            <img src={require('./../../icons/minus-square.svg')} alt='delete' />
        </button>;

        return (
            <tr key={indice++}>
                <th key={indice++}>
                    {btnEdit} {btnDelete}
                </th>
                {columns}
            </tr>
        )
    }
}