import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

const Book = () => {
    const {id} = useParams()
    //return object has all custom parameters

    const obj = useOutletContext()
    
  return (
    <>
    <div>book {id} {obj.name}</div>
    
    </>
  )
}

export default Book