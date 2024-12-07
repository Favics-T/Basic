import React from 'react'
import { z } from "zod";

const Login = () => {
  return (
    <div className='bg-slate-100  h-96
    '>

            <div className='h-[600px] bg-white w-[700px] ml-96'>

                <label htmlFor="name">Name</label>
                <input type="text" id='name' />

                <label htmlFor="email">E-mail</label>
                <input type="text" id='email' />

                <label htmlFor="password">Password</label>
                <input type="text" id='password' />

                <label htmlFor="c-password">Confirm Password</label>
                <input type="text" id='c-password' />
            </div>
         
      
    </div>
  )
}

export default Login
