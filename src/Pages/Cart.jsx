import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItem, resetCart,increment,decrement } from '../redux/homsSlice';

const Cart = () => {
    const dispatch = useDispatch()
    const data = useSelector((state)=>state.homsreducer.data);
    const [totalPrice , setTotalPrice] = useState("");
   useEffect(()=>{
    let Total= 0;
    data.map((el)=>{
        Total +- el.price *  el.quantity;
        return setTotalPrice(Total.toFixed(2))
    })
   },[data])
  return (
    <div className=' w-full bg-gray-100 p-4'>
        <div className='container mx-auto h-auto grid grid-cols-5 gap-8'>
            <div className='w-full h-full bg-white px-4 col-span-4'>
        <div className='font-titleFont flex items-center justify-between border-b-[1px] border-b-gray-400 py-3'>
            <h2 className='text-3xl font-medium'>Shopping Cart </h2>
            <h4 className='text-xl font-normal'>Subtitle</h4>
        </div>
        {/* Product starts here */}
        <div>
            {
                data.map((el)=>(
                    <div 
                    key={el.id} 
                    className='w-full border-b-[1px] border-b-gray-300 p-4 flex items-center 
                    gap-6'>


                        <div className='w-full flex items-center justify-center
                         gap-6'>
                            
                        <div className='w-2/5'>
                        <img
                         className='w-full h-44 object-contain'
                         src={el.image} 
                         alt="ProductImg" />    
                        </div>
                        <div className='w-4/5'>
                            <h2 className='font-semibold text-lg'>{el.title}</h2>
                            <p className='pr-10 text-sm'>{el.description.substring(0,120)}</p>
                            <p className='text-base'>
                                Unit Price{" "}
                                 <span className='font-semibold'>${el.price}</span>
                                </p>
                                <div
                                 classname=' bg-[#f0f2f2] 
                                  justify-center items-center gap-1 w-24 py-1 text-center
                                    flex flex-col-

                                drop-shadow-lg rounded-md'>
                            <p className='text-blue-950'> Qty:</p>

                            <div className='flex '>
                            <p 
                            onClick={()=> dispatch(increment(el.id))}
                             classname=' cursor-pointer p-4 bg-gray-200  px-1 rounded-md hover:bg-gray-400 duration-300'>
                                 +</p>
                                 <p>{el.quantity}</p>


                                 <p
                                  onClick={()=> dispatch(decrement(el.id))} 
                                  classname=' border-2 border-black
                                  cursor-pointer bg-gray-200   px-4
                                   rounded-md hover:bg-gray-400 duration-300'>
                                 -</p> 
                            </div>
                            

                            </div>
                            <button
                             onClick={()=> dispatch(deleteItem(el.id))}
                              classname='bg-red-500 cursor-pointer w-36 py-1 rounded-lg
                             text-white mt-2 hover:bg-red-900 duration-300'>
                                Delete Item
                                </button>
                        </div>
                        <div>
                            <p className='text-lg font-title font-semibold'>
                                #{el.price * el.quantity}
                            </p>
                        </div>
                        </div>
                    </div>
            ))}
        </div>
        <div onClick={()=>dispatch(resetCart())} className='w-full py-2'>
        <button className='px-10 py-2 bg-red-500 hover:bg-red-600 active:bg-red-500
        text-white rounded-lg font-titleFont font-semibold text-lg tracking-wide'>
                Clear Cart
        </button>
        </div>
        
        </div>
        <div className='w-full h-52 bg-white col-span-1 flex flex-col justify-center  items-center p-4'>
            <div>
                <p className='flex gap-2 items-start text-sm '>
                    <span>
                        Your order Qualifies for FREE Shipping Choose this option at 
                        checkout, See details....

                    </span>{"  "}
                </p>
            </div>

            <div>
                <p className='font-semi-bold px-10 py-1 flex items-center justify-between'></p>
                    Total: <span className='text-lg font-bold'>${totalPrice}</span>
            </div>

            <button className='w-full font-titlefont font-medium text-base bg-gradient-to-tr
            from-blue-950 hover:border-blue-950 active:bg-gradient-to-bl
            active:from-blue-900 active:to-blue-500 duration-200 py-1.5 rounded-md mt-3 '>
                Proceed to Pay
            </button>
        </div>
        </div>
     
   
   <div>
    <img className='h-96' src="" alt="" />
   </div>
    
    </div>
  )
}

export default Cart
