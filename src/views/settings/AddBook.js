import React from 'react';
import axios from 'axios';

export default class AddBook extends React.Component {
    
    addBook(book) {
        axios.request({
            method: 'POST',
            url: 'http://localhost:8080/book/add',
            data: book
        }).then(res => {
            this.props.history.push('/')
        }).catch(err => console.log(err));
    }

    onAddSubmit() {
        const book = {
            name : this.refs.Name.value,
            writer : this.refs.Writer.value,
            desc : this.refs.Desc.value
        }
        this.addBook(book);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onAddSubmit.bind(this)}>
                    <div className='form-group row'>
                        <label className='col-sm-2 col-form-label'>Name</label>
                        <div className='col-sm-10'>
                            <input type='text' className='form-control' name='name' ref='Name'/>
                        </div>
                    </div>
                    <div className='form-group row'>
                        <label className='col-sm-2 col-form-label'>Writer</label>
                        <div className='col-sm-10'>
                            <input type='text' className='form-control' name='writer' ref='Writer'/>
                        </div>
                    </div>
                    <div className='form-group row'>
                        <label className='col-sm-2 col-form-label'>Desc</label>
                        <div className='col-sm-10'>
                            <input type='text' className='form-control' name='desc' ref='Desc'/>
                        </div>
                    </div>
                    <input type='submit' value='save'/>
                </form>
            </div>
        );
    }

}