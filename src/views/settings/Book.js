import React from 'react';
import { Link } from 'react-router-dom';
import BookItem from './BookItem';
import BookService from './../../service/BookService';

export default class Book extends React.Component {
    constructor() {
        super();
        this.state = {
            books : []
        }
        this.bs = new BookService();
    }

    componentWillMount() {
        this.getbooks();
    }

    getbooks() {        
        this.bs.getBooks().then(response => {
            //this.setState({books : response.data});
            console.log(response.data);
        }, () => console.log(this.state));
    }


    render() {
        var bookItem = this.state.books.map((book, i) => {
            return (
                <BookItem name={book.name} id={book.id}/>
            )
        });
        return (
            <div>
                <h1>BOOKS</h1>
                <ul> {bookItem} </ul>
                <Link to='/addBook'> Add book </Link>
            </div>
        )
    }
}