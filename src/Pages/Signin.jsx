import React from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
    <div className='w-full'>
      <div>
        <form action="">
          <h2 className='w-[100px] mb-6 mt-20 ml-[700px] bg-blue-300 rounded-xl font-bold p-6  mx-auto'>HAA<span className='text-white'>*L</span> </h2>
          <div className='w-[500px] ml-[450px] border border-zinc-200 p-6 mt-18 mb-28  '>
            <h2 className='font-titleFont text-3xl font-medium mb-4'>Sign in</h2>
            <div className='flex flex-col gap-3'>
              <div className='flex flex-col gap-2 '>
                <p className='text-sm font-medium'>Email or Phone Number</p>
                <input className='w-full lowercase py-1 border border-zinc-400 px-2 text-base
                rounded-sm outline-none focus-within:border-blue-900
                focus-within:shadow-blue-950 duration-100'
                 type="email" />

              </div>


                  <div className='flex flex-col gap-2 '>
                    <p className='text-sm font-medium'>Password</p>
                      <input className='w-full lowercase py-1 border border-zinc-400 px-2 text-base
                rounded-sm outline-none focus-within:border-blue-900
                focus-within:shadow-blue-950 duration-100' type="password" />
                  </div>
                  <button onClick={(e)=>e.preventDefault

                  } className='w-full py-1.5 text-sm font-normal rounded-sm
                  bg-gradient-to-t from-blue-400 to-blue-950 hover:bg-gradient-to-b border
                  border-zinc-400 active:border-blue-950 active:shadow-blue-600'>Continue</button>
            </div>

                    <Link to="/signup">
                    <button>
                      <p className='bg-[#000b58] w-20 text-white
                      mt-10 ml-48 p-2 rounded-lg font-bodyFont font-semibold'>Sign Up</p>
                    </button>
                    </Link>
                   
          </div>
        </form>
      </div>
      
    </div>
  )
}

export default Signin
