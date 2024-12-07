import React,{useContext,useEffect,useState} from 'react'
import StarRateIcon from '@mui/icons-material/StarRate';
import ApiIcon from '@mui/icons-material/Api';
import { ApiOutlined, ArrowCircleRightOutlined, FavoriteOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/homsSlice';


function ProductDisplay() {
    const dispatch = useDispatch()
  const [data, setData] = useState([])

  useEffect(() =>{
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(json => setData(json))
    .catch(err => console.log(err))
  },[])



  return (

    <div className=''>
      <div>
        <h2 className='w-60 text-center border border-blue-950 p-2 bg-white-900 text-blue-950 font-medium
        rounded-lg ml-10 mb-5'>
          What's New</h2>
      </div>
      <div className='w-[1300px] mx-auto grid grid-cols-4 gap-10 px-4 '>
     
     {data.length === 0 && <p classname="bg-red-900 h-44 font-bold text-white">We Will Be With You Shortly</p>}

     {
             
            data.map((el) => 
            (
              <div> 
               
              <div key={el.id} className='
              bg-white h-auto border-[1px] border-gray-200 py-6 z-30
               hover:border-transparent shawdow-none hover:shadow-testShadow
                duration-200  
              flex flex-col gap-4 relative 
              '>
             {/* <span className='text-xs text-blue-400 capitalize italic absolute top-2 right-2'>{el.category}</span> */}
               <div className='
               w-full h-auto flex items-center justify-center relative group'>
               <img className='w-52 h-64 object-contain'
                src={el.image} 
                alt="ProductImg" />
                   {/* <ul className='w- full h-36 bg-gray-100 absolute bottom-[-170px] flex flex-col item-end
               justify-center gap-2 font-titleFont px-2 border-1 border-r group-hover:bottom-0 duration-700'><li className='productsli border-b-[1px]'> Compare <span><ApiOutlined /></span>
               </li> <li className='productsli border-b-[1px]'>Add to Cart <span><ShoppingCartOutlined /></span></li><li className='productsli border-b-[1px]'>
                 View Details{" "} <span><ArrowCircleRightOutlined /></span></li><li className='productsli border-b-[1px]'>Add To Wish List{" "} <span><FavoriteOutlined /></span>
               </li></ul> */}
               </div>
              
              <div className='px-4 z-10 bg-white'>
              <div className='flex items-center justify-between'>
               <h2 className='font-titleFont tracking-wide mt-3 text-lg text-brown'>{el.title.substring(0,20)}</h2>
               <p className=''>${el.price}</p>
               </div>

               <div>
               <p className='text-sm mt-5'>${el.description.substring(0,70)}...</p>
               </div>
              </div>
               
               <div className='text-blue-700 ml-3'>
                 <StarRateIcon />
                 <StarRateIcon />
                 <StarRateIcon />
                 <StarRateIcon />
               </div>
               
               <button onClick={()=>dispatch(addToCart({
                   id:el.id,
                   title:el.title,
                   description:el.description,
                   price:el.price,
                   category:el.category,
                   image:el.image,
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


    
  )
}

export default ProductDisplay
