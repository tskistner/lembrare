import React from 'react';
import axios from 'axios';

export default class BookItem extends React.Component {

    onDelete() {
        const id = this.props.id;
        axios.delete('http://localhost:8080/book/del/'.concat(id)).then(() => {
            window.location.reload();
        });
    }

    render() {
        return (
            <li>
                {this.props.name}
                <input type='button' value='del' onClick={this.onDelete.bind(this)} />
            </li>
        )
    }
}