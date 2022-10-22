import React from 'react'
import { useParams } from 'react-router-dom'

export const Test = () => {
    const {id,name}=useParams()
  return (
    <div>
       <h1>Test page my url {id}/{name}</h1>
        </div>
  )
}
