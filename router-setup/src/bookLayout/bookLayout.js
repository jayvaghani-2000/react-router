import React, { useState } from 'react'
import { Link, NavLink, Outlet, useSearchParams } from 'react-router-dom'

const BookLayout = () => {
    const [search, setSearch] = useSearchParams({n : 3})
    const num = search.get("n")
    // const [num, setNum] = useState("3")
    return (
        <>
            <Link to="/book/1" replace>Book 1</Link>
            <br />
            {/* end for exact route */}
            <NavLink style={({isActive}) => ({color:isActive ? "pink" : "yellow"})} end to="/book/2" reloadDocument>Book 2</NavLink>
            <br />
            {/* end for exact route */}
            <NavLink to={`/book/${num}`}>Book {num}</NavLink>
            <br />
            {/* state to pass to that url */}
            <Link to="/book/New" >New Book</Link>
            <input type={"number"} value={num} onChange={e => {setSearch({n: e.target.value})}}/>
            {/* RENDER NESTED LAYOUT */}
            <Outlet context={{name:"jay vaghani"}}/>
        </>
    )
}

export default BookLayout