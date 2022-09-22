import React from 'react'
import { Route, Routes, useLocation, useOutletContext, useRoutes } from 'react-router-dom'
import Book from './book'
import BookLayout from './bookLayout/bookLayout'
import NewBook from './newBook'

const BookList = () => {
    // const obj = useOutletContext()
    const location = useLocation()
    console.log('location', location)
    const element = useRoutes([
        {
            path:"/",
            element:<BookLayout/>,
            children:[
            {
                path: ':id',
                element:<Book/>
            },
            {
                path: 'new',
                element:<NewBook/>
            },
            {
                path: '/1',
                element:<h1>pppppp</h1>
            },
        ]

        }
    ])
    return (
        <>
            <div>bookList -{/*{obj.name}*/}</div>
            {/* <Routes> */}
                {/* <Route path="/" element={<BookLayout />}>
                    <Route path=":id" element={<Book />} />
                    <Route path="new" element={<NewBook />} />
                    <Route path='/1' element={<p>BBBBBB</p>} />

                </Route> */}
                {element}
            {/* </Routes> */}
        </>
    )
}

export default BookList