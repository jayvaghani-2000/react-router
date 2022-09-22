import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const BookLayout = () => {
    return (
        <>
            <Link to="/book/1">Book 1</Link>
            <br />
            <Link to="/book/2">Book 2</Link>
            <br />
            <Link to="/book/New">New Book</Link>
            {/* RENDER NESTED LAYOUT */}
            <Outlet context={{name:"jay vaghani"}}/>
        </>
    )
}

export default BookLayout