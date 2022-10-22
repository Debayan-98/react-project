import React from 'react'
import { useState } from 'react'

export const Contact = () => {
    const [name,setName]=useState();
    const handleSubmit=(event)=>{
        event.preventDefault()
        alert(`your name is ${name}`);
        console.log(name);
    }
  return (
    <div style={{marginTop:'50px'}}>
    <h1>react form handling</h1>
    <form onSubmit={handleSubmit}>
        <label>Enter Name:
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="submit" value="submit" />
        </label>
    </form>
    </div>
  )
}
