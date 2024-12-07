import React, { useState } from 'react'
import { allCategory } from '../Const/Index'
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import MoneyOffCsredSharpIcon from '@mui/icons-material/MoneyOffCsredSharp';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import SearchIcon from '@mui/icons-material/Search';
import PixOutlinedIcon from '@mui/icons-material/PixOutlined';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'



function Header() {
    const [category ,setCategory] = useState(false)
    const data = useSelector((state)=>state.homsreducer.data)
    console.log(data)

  return (
    <div className='sticky top-0 z-50' >
        <div className='bg-blue-100 w-full h-20   text-black px-8 py-6 mt-2 flex relative '>
            {/* logo starts here */}
            
           
            <Link to="/home" >
            <div> 

                <h1 className='text-black text-3xl font-extrabold'>HAA<span className='text-white         
            '>*L</span></h1>
                
            
            </div>
            </Link>
 {/* LOGO ENDS HERE */}

            {/* mid-header */}

            <div className='px-96 absolute right- w-auto'>

                <ul className='flex font-mono  left-44'>
                   <Link to='/shop'>
                   <li className='list'>SHOP</li>
                   </Link> 
                    <li className='list'>Product-Category</li>
                    <li className='list' onClick={()=>setCategory(!category)}>What's New</li>

                    {
                        category && (
                            <div>
                             <ul className='absolute w-56 h-80 top-10 left-0 overflow-y-scroll
                overflow-x-hidden bg-white border-[1px] border-black text-black p-2 flex-col gap-1
                z-50                
                '>
                    {
                        allCategory.map((item)=>
                        (
                            <li>{item.title}</li>

                        ))}
                               
                                </ul>
                            </div>

                        )
                    }
                </ul>

            </div>
  {/* middle comp ends */}

            {/* add to cart,search and profile starts */}

            <div className='absolute right-44 flex  lists '>

            <div className='lists pt-2 pl
            -3'><SearchIcon/></div> 


                        {/* Cart Starts Here */}
                  
                   <div className='flex items-start p-2 justify-center relative ml-7 text-blue-900'>
                    <Link to="/cart"><ShoppingCartSharpIcon /></Link>
                    <p className='text-xs font-extrabold mt-3 '>
                        Cart{" "}
                        <span className='absolute text-xs -top-1 left-6 font-semibold p-1 h-4'>
                            {data.length > 0 ? data.length:0}
                        </span>
                        
                    </p>
                     
                    </div>
                   
                    {/* Cart Ends here */}
                    
                   
                      <div className='lists pt-2 hover: text-blue-900'>
                       <Link to="/signin"> <PersonAddAltIcon/></Link> 
                        </div>  
                      

                      {/* div 3 ends here */}
{/* {
        productsData.map((item)=>(
          <div>
            <img src={ListItem.image} alt="ProductImg" />
          </div>
        ))
} */}






            </div>

            {/* add to cart and co ends here  */}


        </div>

        {/* Header Bottom */}

       

    </div>
  )
}

export default Header
