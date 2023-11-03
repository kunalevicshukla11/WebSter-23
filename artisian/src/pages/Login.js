import React, { useState } from 'react'

export default function Login() {
    const [data, setData] = useState({
        email: '',
        password: '',
    })
    const loginUser = (e) => {
        e.preventDefault()
    }


    return (
        <div>
            <form onSubmit={loginUser}>
                <lable>Email</lable>
                <input type='email' placeholder='enter email..' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />

                <lable>Password</lable>
                <input type='password' placeholder='enter password..' value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
