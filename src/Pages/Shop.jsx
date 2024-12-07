import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux'
import StarRateIcon from '@mui/icons-material/StarRate';
import { addToCart } from '../redux/homsSlice';


const Shop = () => {

    const [electronics, setElectronics] = useState([])
    const [jewelry, setJewelry] = useState([])
    const [men, setMen] = useState([])
    const [women, setWomen] = useState([])

    const dispatch = useDispatch();

  useEffect(() =>{
    fetch('https://fakestoreapi.com/products/category/electronics')
    .then(response => response.json())
    .then(json => setElectronics(json))
    .catch(err => console.log(err))
  },[])

  useEffect(() =>{
    fetch("https://fakestoreapi.com/products/category/men's%20clothing")
    .then(response => response.json())
    .then(json => setMen(json))
    .catch(err => console.log(err))
  },[])

  useEffect(() =>{
    fetch("https://fakestoreapi.com/products/category/women's%20clothing")
    .then(response => response.json())
    .then(json => setWomen(json))
    .catch(err => console.log(err))
  },[])

  useEffect(() =>{
    fetch('https://fakestoreapi.com/products/category/jewelery')
    .then(response => response.json())
    .then(json => setJewelry(json))
    .catch(err => console.log(err))
  },[])
  return (
    <div className='h- bg-white:' >

            <h2 className='bg-blue-950 mx-auto w-56 text-white font-bold text-center p-2 rounded-xl mt-11 ml-[500px]'>
              SHOPPING VIEW
            </h2>

            {/* MEN CATEGORY STARTS HERE */}

            <div className='flex '>  
            <div>
              <h2 className='border mt-6 border-blue-950 w-48 p-2 rounded-lg ml-12 text-center'>
                MEN'S CATEGORY    
              </h2>
            </div>

           {
            men.map((mens)=>(
             <div>

              <div key={mens.id} 
              className='bg-white h-auto border-[1px] border-gray-200 py-6 z-30
               hover:border-transparent shawdow-none hover:shadow-testShadow
                duration-200  
              flex flex-col gap-4 relative'
              >



              <div className='flex'>
              <div className='w-full h-auto flex items-center justify-center relative group  '>
                  <img src={mens.image} alt=""
                  className='w-52 h-64 object-contain ' />
                </div>
              </div>

              <div className='px-4 z-10 bg-white'>
              <div className='flex items-center justify-between'>
               <h2 className='font-titleFont tracking-wide mt-3 text-lg text-brown'>{mens.title.substring(0,20)}</h2>
               <p className=''>${mens.price}</p>
               </div>

               <div>
               <p className='text-sm mt-5'>${mens.description.substring(0,70)}...</p>
               </div>
              </div>


              <div className='text-blue-700 ml-3'>
                 <StarRateIcon />
                 <StarRateIcon />
                 <StarRateIcon />
                 <StarRateIcon />
               </div>
               
               <button onClick={()=>dispatch(addToCart({
                   id:mens.id,
                   title:mens.title,
                   description:mens.description,
                   price:mens.price,
                   category:mens.category,
                   image:mens.image,
                   quantity:1
               }))}
                className='w-28 ml-16  font-titleFont font-medium text-base bg-gradient-to-tr 
              from-blue-900  to-blue-900  border hover:from-blue-900 hover:to-blue-950
              border-blue-900 hover:border-blue-700 active:bg-gradient-to-bl
              active:from-blue-400 active:to-blue-500 duration-200 text-white py-1.5 rounded-md mt-2'>Add To Cart</button>
               






              </div>
      
             </div>

            ))
           }

            </div>

            {/* MEN CATEGORY ENDS HERE */}


            {/* Women Category Starts here */}
            <div className='flex '>  
            <div>
              <h2 className='border mt-6 border-blue-950 w-48 p-2 rounded-lg ml-12 text-center'>
                WOMEN'S CATEGORY    
              </h2>
            </div>

           {
            women.map((womens)=>(
             <div>

              <div key={womens.id} 
              className='bg-white h-auto border-[1px] border-gray-200 py-6 z-30
               hover:border-transparent shawdow-none hover:shadow-testShadow
                duration-200  
              flex flex-col gap-4 relative'
              >



              <div className='flex'>
              <div className='w-full h-auto flex items-center justify-center relative group  '>
                  <img src={womens.image} alt=""
                  className='w-52 h-64 object-contain ' />
                </div>
              </div>

              <div className='px-4 z-10 bg-white'>
              <div className='flex items-center justify-between'>
               <h2 className='font-titleFont tracking-wide mt-3 text-lg text-brown'>{womens.title.substring(0,20)}</h2>
               <p className=''>${womens.price}</p>
               </div>

               <div>
               <p className='text-sm mt-5'>${womens.description.substring(0,70)}...</p>
               </div>
              </div>


              <div className='text-blue-700 ml-3'>
                 <StarRateIcon />
                 <StarRateIcon />
                 <StarRateIcon />
                 <StarRateIcon />
               </div>
               
               <button onClick={()=>dispatch(addToCart({
                   id:womens.id,
                   title:womens.title,
                   description:womens.description,
                   price:womens.price,
                   category:womens.category,
                   image:womens.image,
                   quantity:1
               }))}
                className='w-28 ml-16  font-titleFont font-medium text-base bg-gradient-to-tr 
              from-blue-900  to-blue-900  border hover:from-blue-900 hover:to-blue-950
              border-blue-900 hover:border-blue-700 active:bg-gradient-to-bl
              active:from-blue-400 active:to-blue-500 duration-200 text-white py-1.5 rounded-md mt-2'>Add To Cart</button>
              
              </div>
      
             </div>

            ))
           }

            </div>


            {/* Women cateory ends here */}


           {/* Jewelry Starts Hr */}

           <div className='flex '>  
            <div>
              <h2 className='border mt-6 border-blue-950 w-48 p-2 rounded-lg ml-12 text-center'>
               Jewelry CATEGORY    
              </h2>
            </div>

           {
            jewelry.map((mens)=>(
             <div>

              <div key={mens.id} 
              className='bg-white h-auto border-[1px] border-gray-200 py-6 z-30
               hover:border-transparent shawdow-none hover:shadow-testShadow
                duration-200  
              flex flex-col gap-4 relative'
              >



              <div className='flex p-4 mt-10'>
              <div className='w-full h-auto flex items-center justify-center relative group  '>
                  <img src={mens.image} alt=""
                  className='w-52  h-64 object-contain ' />
                </div>
              </div>

              <div className='px-4 z-10 bg-white'>
              <div className='flex items-center justify-between'>
               <h2 className='font-titleFont tracking-wide mt-3 text-lg text-brown'>{mens.title.substring(0,20)}</h2>
               <p className=''>${mens.price}</p>
               </div>

               <div>
               <p className='text-sm mt-5'>${mens.description.substring(0,70)}...</p>
               </div>
              </div>


              <div className='text-blue-700 ml-3'>
                 <StarRateIcon />
                 <StarRateIcon />
                 <StarRateIcon />
                 <StarRateIcon />
               </div>
               
               <button onClick={()=>dispatch(addToCart({
                   id:mens.id,
                   title:mens.title,
                   description:mens.description,
                   price:mens.price,
                   category:mens.category,
                   image:mens.image,
                   quantity:1
               }))}
                className='w-28 ml-16  font-titleFont font-medium text-base bg-gradient-to-tr 
              from-blue-900  to-blue-900  border hover:from-blue-900 hover:to-blue-950
              border-blue-900 hover:border-blue-700 active:bg-gradient-to-bl
              active:from-blue-400 active:to-blue-500 duration-200 text-white py-1.5 rounded-md mt-2'>Add To Cart</button>
               






              </div>
      
             </div>

            ))
           }

            </div>




           {/* Jewelry ends here */}


{/* Electronics starts here */}
<div className='flex '>  
            <div>
              <h2 className='border mt-6 border-blue-950 w-48 p-2 rounded-lg ml-12 text-center'>
                Electronics CATEGORY    
              </h2>
            </div>

           {
            electronics.map((mens)=>(
             <div>

              <div key={mens.id} 
              className='bg-white h-auto border-[1px] border-gray-200 py-6 z-30
               hover:border-transparent shawdow-none hover:shadow-testShadow
                duration-200  
              flex flex-col gap-4 relative'
              >



              <div className='flex'>
              <div className='w-full h-auto flex items-center justify-center relative group  '>
                  <img src={mens.image} alt=""
                  className='w-52 h-64 object-contain ' />
                </div>
              </div>

              <div className='px-4 z-10 bg-white'>
              <div className='flex items-center justify-between'>
               <h2 className='font-titleFont tracking-wide mt-3 text-lg text-brown'>{mens.title.substring(0,20)}</h2>
               <p className=''>${mens.price}</p>
               </div>

               <div>
               <p className='text-sm mt-5'>${mens.description.substring(0,70)}...</p>
               </div>
              </div>


              <div className='text-blue-700 ml-3'>
                 <StarRateIcon />
                 <StarRateIcon />
                 <StarRateIcon />
                 <StarRateIcon />
               </div>
               
               <button onClick={()=>dispatch(addToCart({
                   id:mens.id,
                   title:mens.title,
                   description:mens.description,
                   price:mens.price,
                   category:mens.category,
                   image:mens.image,
                   quantity:1
               }))}
                className='w-28 ml-16  font-titleFont font-medium text-base bg-gradient-to-tr 
              from-blue-900  to-blue-900  border hover:from-blue-900 hover:to-blue-950
              border-blue-900 hover:border-blue-700 active:bg-gradient-to-bl
              active:from-blue-400 active:to-blue-500 duration-200 text-white py-1.5 rounded-md mt-2'>Add To Cart</button>
               






              </div>
      
             </div>

            ))
           }

            </div>

{/* Electronic ends here */}










                    </div>
    


           

  )
}

export default Shop
