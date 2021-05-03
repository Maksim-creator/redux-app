import React, { Component } from 'react'
import BookListItem from '../bookListItem'

export default class BookList extends Component {
    
    render() {
        const {books} = this.props
        console.log(books);
        return (
            <ul>
                {
                    books.map(book => {
                        return (
                            <li key={book.id}>
                                <BookListItem book={book} />
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}
