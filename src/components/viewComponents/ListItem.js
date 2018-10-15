import React from 'react';

export default class ListItem extends React.Component {

    constructor() {
        super();
        this.onEdit = this.onEdit.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    onDelete() {
        this.props.onDelete(this.props.columns);
    }

    onEdit() {
        this.props.onEdit(this.props.columns);
    }

    render() {
        let indice = this.props.id;
        const columns = this.props.columns.map(c => {
            if (c.SHOW) {
                return <td key={indice++}>{c.VALUE}</td>;
            }
            return null;
        });

        const btnEdit = <button className='btn btn-light'
            id={'btn_edit_' + this.props.id}
            onClick={this.onEdit}
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