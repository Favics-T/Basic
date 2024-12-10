import React,{useState,useEffect,useContext} from 'react'
import { useDispatch } from 'react-redux'
import StarRateIcon from '@mui/icons-material/StarRate';
import { addToCart } from '../redux/homsSlice';



function Shop(){

    const [jewelery, setJewelery] = useState([]);
    const dispatch = useDispatch()

    useEffect(() =>{
      fetch('https://fakestoreapi.com/products/category/jewelery')
      .then(response => response.json())
      .then(json => setJewelery(json))
      .catch(err => console.log(err))
    },[])

    const [men, setMen] = useState([])

    useEffect(() =>{
      fetch("https://fakestoreapi.com/products/category/men's clothing")
      .then(response => response.json())
      .then(json => setMen(json))
      .catch(err => console.log(err))
    },[])

    const [women, setWomen] = useState([])

    useEffect(() =>{
      fetch("https://fakestoreapi.com/products/category/women's clothing")
      .then(response => response.json())
      .then(json => setWomen(json))
      .catch(err => console.log(err))
    },[])

    const [electronics, setElectronics] = useState([])

    useEffect(() =>{
      fetch("https://fakestoreapi.com/products/category/electronics")
      .then(response => response.json())
      .then(json => setElectronics(json))
      .catch(err => console.log(err))
    },[])

    



    return(
        <div>

            {/* jewelery starts heere */}
            <div>
                <h2 className='border-2 border-[#000b58] text-center w-72 rounded-xl p-2 m-8 '> Jewelery </h2>

                <div className='ml-48 flex'>
                    {
                        jewelery.map((jew)=>(
                            <div key={jew.id} className=' border-gray-200 w-72 m-4 p-4 border-4 place-items-center'>
                            
                             <div className=' w-full h-auto flex items-center justify-center relative group'>
                            <img src={jew.image} 
                                 alt="jewelry" 
                                 className='w-52 h-64 object-contain '/>
                                </div>


                                

                                    <div className='px-4 z-10 bg-white'>

                                        <div>
                                        <h2 className='font-titleFont tracking-wide mt-3 text-lg text-brown'>
                                            {jew.title.substring(0,60) }  
                                            </h2> 
                                           < p> ${jew.price} </p>
                                        </div>

                              
                              <div>
                              <p className='text-sm mt-5'>{jew.description.substring(0,90)} </p>  
                              </div>

                              <div className='text-blue-900 ml-3'>
                 <StarRateIcon />
                 <StarRateIcon />
                 <StarRateIcon />
                 <StarRateIcon />
               </div>
                                   
               <button onClick={()=>dispatch(addToCart({
                   id:jew.id,
                   title:jew.title,
                   description:jew.description,
                   price:jew.price,
                   category:jew.category,
                   image:jew.image,
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

            </div>

            {/* jewelery end here */}

            {/* Men Starts Here */}
            
             <div>
                <h2 className='border-2 border-[#000b58] text-center w-72 rounded-xl p-2 m-8 '> Men </h2>

                <div className='ml-48 flex'>
                    {
                        men.map((jew)=>(
                            <div key={jew.id} className=' border-gray-200 w-72 m-4 p-4 border-4 place-items-center'>
                            
                             <div className=' w-full h-auto flex items-center justify-center relative group'>
                            <img src={jew.image} 
                                 alt="jewelry" 
                                 className='w-52 h-64 object-contain '/>
                                </div>


                                

                                    <div className='px-4 z-10 bg-white'>

                                        <div>
                                        <h2 className='font-titleFont tracking-wide mt-3 text-lg text-brown'>
                                            {jew.title.substring(0,60) }  
                                            </h2> 
                                           < p> ${jew.price} </p>
                                        </div>

                              
                              <div>
                              <p className='text-sm mt-5'>{jew.description.substring(0,90)} </p>  
                              </div>

                              <div className='text-blue-900 ml-3'>
                 <StarRateIcon />
                 <StarRateIcon />
                 <StarRateIcon />
                 <StarRateIcon />
               </div>
                                   
               <button onClick={()=>dispatch(addToCart({
                   id:jew.id,
                   title:jew.title,
                   description:jew.description,
                   price:jew.price,
                   category:jew.category,
                   image:jew.image,
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

            </div>
            {/* Men Ends Here */}

            {/* Women Starts Here*/}
            <div>
                <h2 className='border-2 border-[#000b58] text-center w-72 rounded-xl p-2 m-8 '> WOMEN </h2>

                <div className='ml-48 flex'>
                    {
                        women.map((jew)=>(
                            <div key={jew.id} className=' border-gray-200 w-72 m-4 p-4 border-4 place-items-center'>
                            
                             <div className=' w-full h-auto flex items-center justify-center relative group'>
                            <img src={jew.image} 
                                 alt="jewelry" 
                                 className='w-52 h-64 object-contain '/>
                                </div>


                                

                                    <div className='px-4 z-10 bg-white'>

                                        <div>
                                        <h2 className='font-titleFont tracking-wide mt-3 text-lg text-brown'>
                                            {jew.title.substring(0,60) }  
                                            </h2> 
                                           < p> ${jew.price} </p>
                                        </div>

                              
                              <div>
                              <p className='text-sm mt-5'>{jew.description.substring(0,90)} </p>  
                              </div>

                              <div className='text-blue-900 ml-3'>
                 <StarRateIcon />
                 <StarRateIcon />
                 <StarRateIcon />
                 <StarRateIcon />
               </div>
                                   
               <button onClick={()=>dispatch(addToCart({
                   id:jew.id,
                   title:jew.title,
                   description:jew.description,
                   price:jew.price,
                   category:jew.category,
                   image:jew.image,
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

            </div>

            {/* Women Ends Here */}

            {/* Electronics Starts Here */}

            <div>
                <h2 className='border-2 border-[#000b58] text-center w-72 rounded-xl p-2 m-8 '> ELECTRONICS </h2>

                <div className='ml-48 flex'>
                    {
                        electronics.map((jew)=>(
                            <div key={jew.id} className=' border-gray-200 w-72 m-4 p-4 border-4 place-items-center'>
                            
                             <div className=' w-full h-auto flex items-center justify-center relative group'>
                            <img src={jew.image} 
                                 alt="jewelry" 
                                 className='w-52 h-64 object-contain '/>
                                </div>


                                

                                    <div className='px-4 z-10 bg-white'>

                                        <div>
                                        <h2 className='font-titleFont tracking-wide mt-3 text-lg text-brown'>
                                            {jew.title.substring(0,60) }  
                                            </h2> 
                                           < p> ${jew.price} </p>
                                        </div>

                              
                              <div>
                              <p className='text-sm mt-5'>{jew.description.substring(0,90)} </p>  
                              </div>

                              <div className='text-blue-900 ml-3'>
                 <StarRateIcon />
                 <StarRateIcon />
                 <StarRateIcon />
                 <StarRateIcon />
               </div>
                                   
               <button onClick={()=>dispatch(addToCart({
                   id:jew.id,
                   title:jew.title,
                   description:jew.description,
                   price:jew.price,
                   category:jew.category,
                   image:jew.image,
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

            </div>
            {/* Electronic Ends Here */}
            
        </div>
    )
}

export default Shop