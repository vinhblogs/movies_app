import React, { useState } from 'react'

const Login = () => {

    const [username,setUsername]=useState("")
    const[password,setPassword]=useState("")

  return (
    <div className='login'>    
        <form >
            <h2>Login</h2>
            <div>
                <label>Username</label>
                <input type="text" placeholder='name' />
            </div>
            <div>
                <label>Password</label>
                <input type="password"/>
            </div>
        </form>
    </div>
  )
}

export default Login