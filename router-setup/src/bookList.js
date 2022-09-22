import React from 'react'
import { Route, Routes, useOutletContext } from 'react-router-dom'
import Book from './book'
import BookLayout from './bookLayout/bookLayout'
import NewBook from './newBook'

const BookList = () => {
    // const obj = useOutletContext()
    return (
        <>
            <div>bookList -{/*{obj.name}*/}</div>
            <Routes>
                <Route element={<BookLayout />}>
                    <Route path=":id" element={<Book />} />
                    <Route path="new" element={<NewBook />} />
                    <Route path='/1' element={<p>BBBBBB</p>} />

                </Route>
            </Routes>
        </>
    )
}

export default BookList