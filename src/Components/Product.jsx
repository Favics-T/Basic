import React, { useEffect } from 'react'
import image from "../assets/w2.webp"
import image0 from "../assets/sandisk.webp"
import image1 from "../assets/samsung.webp" 
import image2 from "../assets/silicon.jpg"
import image3 from "../assets/samsung49.webp" 
import image4 from "../assets/wd.webp"
import image5 from "../assets/samsung.webp" 
import StarRateIcon from '@mui/icons-material/StarRate';
// import { useLoaderData } from 'react-router-dom'

function Product() {
//  const data = useLoaderData()
// const productsData = data.data;
  return (
    <div className='relative top-9' >
      
      {/* header starts here */}
      <div>
      <h1 className='font-bold bg-green-950 mt- p-2 h-10 w-48 justify-center text-center text-green-500 ma'>
            PRODUCT DISPLAY
        </h1>
       </div>
      {/* logo description ends here */}



       {/* products display starts here */}
       {/* section one starts here  */}
       <div className='ml-40'>

       
       <div className='flex '>

          <div>
            {/* image starts here */}
          <div className='products'>
          <img src={image} alt="" />

          <div>
              <h1 className='ml-4 mt-6'>WD-ELEMENTS</h1>
              <p className='ml-4 '>#30,500</p>

              <div className='text-green-400 p-2'>
                <StarRateIcon /> 
                <StarRateIcon />  <StarRateIcon /> 
              </div>
              <button className='bg-green-400 p-4 text-white w-full font-medium text-base bg-gradient-to-tr from green-400 to green-800 border hover:from green-400 hover: to bg-green-border-green-900  '>Add To Cart</button>
            </div>
            </div>
            {/* image ends here */}

         </div>
        
        <div>
        <div className='products'>
          <img className='h-60' src={image0} alt="" />
          <div>
              <h1>WD-ELEMENTS</h1>
              <p>#30,500</p>
              <h2 className='bg-black text-white w-32 p-4'>Add To Cart</h2>
            </div>
       
        </div>
     
            </div>

            <div>
        <div className='products'>
          <img className='h-60' src={image1} alt="" />

          <div>
              <h1>WD-ELEMENTS</h1>
              <p>#30,500</p>
              <h2 className='bg-black text-white w-32 p-4'>Add To Cart</h2>
            </div>

            {/* description */}
            {/* <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste numquam repellat architecto suscipit earum! Aut iste doloremque, dolorem praesentium alias eligendi rerum, nam non eos assumenda dolore debitis, magnam et eveniet deleniti
               accusantium! Commodi inventore reiciendis, iure beatae id dignissimos sint ullam culpa maiores sapiente magnam a voluptas. Voluptatum numquam itaque
                sapiente tempore. Corrupti, reprehenderit odio est corporis officiis vel ipsam enim iusto ipsa deleniti. Modi cupiditate, labore libero commodi, fugiat sint quo unde animi enim officiis assumenda in deserunt.
                 In, qui magni odit eius nihil mollitia molestiae a praesentium velit ab est aliquam pariatur asperiores dolore delectus quas id officiis officia sit ipsum. Ut libero id aliquid beatae eum nostrum est 
                 debitis explicabo, suscipit quibusdam ab ad qui esse?
            </p> */}
        
        </div>

           </div>

            <div>
        <div className='products'>
          <img className='h-60' src={image2} alt="" />

          <div>
              <h1>WD-ELEMENTS</h1>
              <p>#30,500</p>
              <h2 className='bg-black text-white w-32 p-4'>Add To Cart</h2>
            </div>
        </div>
    
            </div>

       </div> 
        {/*section one ends here  */}

         {/* section two starts here  */}
       <div className='flex mt-28'>

       <div>
        <div className='products'>
          <img className='h-60' src={image3} alt="" />

          <div>
              <h1>WD-ELEMENTS</h1>
              <p>#30,500</p>
              <h2 className='bg-black text-white w-32 p-4'>Add To Cart</h2>
            </div>
        </div>
       
            </div>


 <div>
        <div className='products'>
          <img className='h-60' src={image4} alt="" />
          <div>
              <h1>WD-ELEMENTS</h1>
              <p>#30,500</p>
              <h2 className='bg-black text-white w-32 p-4'>Add To Cart</h2>
            </div>
        </div>

          </div>


            <div>
        <div className='products'>
          <img className='h-60' src={image} alt="" />

          <div>
              <h1>WD-ELEMENTS</h1>
              <p>#30,500</p>
              <h2 className='bg-black text-white w-32 p-4'>Add To Cart</h2>
            </div>
        </div>
       
            </div>

            <div>
        <div className='products'>
          <img className='h-60' src={image0} alt="" />

          <div>
              <h1>WD-ELEMENTS</h1>
              <p>#30,500</p>
              <h2 className='bg-black text-white w-32 p-4'>Add To Cart</h2>
            </div>
        </div>
     
            </div>

</div> 
{/*section two ends here  */}




{/* products ends here */}
</div>
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
        </div>
       
       






      
    
  
)}

export default Product
