import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className=''>
         <div>
        <form action="">
          <h2 className='w-[35px] mt-20 ml-[700px]  mx-auto'>Boogi</h2>

          <div className='w-[500px] ml-[450px] border border-zinc-200 p-6 mt-18 mb-28  '>
            <h2 className='font-titleFont text-3xl font-medium mb-4'>Sign Up</h2>

            
            <div className='flex flex-col gap-3'>

            <div className='flex flex-col gap-2 '>
                <p className='text-sm font-medium'>Enter Your Name</p>
                <input className='w-full lowercase py-1 border border-zinc-400 px-2 text-base
                rounded-sm outline-none focus-within:border-[#e77600]
                focus-within:shadow-yellow-950 duration-100'
                 type="email" />

              </div>

              <div className='flex flex-col gap-2 '>
                <p className='text-sm font-medium'>Email or Phone Number</p>
                <input className='w-full lowercase py-1 border border-zinc-400 px-2 text-base
                rounded-sm outline-none focus-within:border-[#e77600]
                focus-within:shadow-yellow-950 duration-100'
                 type="email" />

              </div>

              <div className='flex flex-col gap-2 '>
                <p className='text-sm font-medium'>Create Password</p>
                <input className='w-full lowercase py-1 border border-zinc-400 px-2 text-base
                rounded-sm outline-none focus-within:border-blue-900
                focus-within:shadow-yellow-950 duration-100'
                 type="email" />
                 <p className='text-xs text-gray-600'>password must be at least 8characters</p>

              </div>

                  <div className='flex flex-col gap-2 '>
                    <p className='text-sm font-medium'>Confirm Password</p>
                      <input className='w-full lowercase py-1 border border-zinc-400 px-2 text-base
                rounded-sm outline-none focus-within:border-[#e77600]
                focus-within:shadow-yellow-950 duration-100' type="password" />
                  </div>
                  <button onClick={(e)=>e.preventDefault

                  } className='w-full py-1.5 text-white text-sm font-normal rounded-sm
                  bg-gradient-to-t from-blue-800 to-blue-950 hover:bg-gradient-to-b border
                  border-zinc-400 active:border-yellow-800 active:shadow-emerald-600'>Submit</button>
            </div>

                    <div className='mt-10 flex flex-col ml-28'>
                        <p>Already have an Account ?</p>

                    <Link to="/signin">
                    <button>
                      <p className='bg-blue-800 w-20 text-white
                      mt-1 ml-8 p-2 rounded-lg font-bodyFont font-semibold'>Sign In</p>
                    </button>
                    </Link>
                    </div>
                   
                   
          </div>
        </form>
      </div>
      
    </div>
  )
}

export default SignUp
