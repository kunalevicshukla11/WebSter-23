import React from 'react'
import { useState } from 'react'

export default function Register() {

    const [data,setData] = useState({
        name: '',
        email: '',
        password: '',
    })

    const registerUser = (e) =>{
        e.preventDefault()
    }





  return (
    <div>
      <form onSubmit={registerUser}>
        <lable>Name</lable>
        <input type='text' placeholder='enter name..' value={data.name} onChange={(e)=>setData({...data , name:e.target.value})}/>

        <lable>Email</lable>
        <input type='email' placeholder='enter email..' value={data.email} onChange={(e)=>setData({...data , email:e.target.value})}/>

        <lable>Password</lable>
        <input type='password' placeholder='enter password..' value={data.password} onChange={(e)=>setData({...data , name:e.target.value})}/>

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
