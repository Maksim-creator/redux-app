import React from 'react'
import BookList from '../bookList'

const HomePage = () => {
    const books = [
        {
            id: 1,
            title: 'Realize It!',
            author: 'Mile'
        },
        {
            id: 2,
            title: 'Harry Potter',
            author: 'J. Rolling'
        }
    ]
    return (
        <BookList books={books} />
    )
}

export {HomePage} 