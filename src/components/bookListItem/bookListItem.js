import React from 'react'
import './bookListItem.css';

const BookListItem = ({ book }) => {
    const {title, author} = book;

    return (
        <div>
            <span>{title}</span>
            <span>{author}</span>
        </div>
    )
}

export default BookListItem;