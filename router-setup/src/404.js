import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate("/")
        }, 3000)
    }, [])

    return (
        //    <Navigate to={'/'} />
        <h1>Not found</h1>
    )
}

export default NotFound