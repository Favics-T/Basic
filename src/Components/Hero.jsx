import React from 'react'
import Slider from "react-slick";
import hero1 from '../assets/here3.webp'
import hero2 from '../assets/here7.webp'
import hero3 from '../assets/here9.webp'
import hero4 from '../assets/cre.webp'
import hero6 from '../assets/ama.webp'
import hero7 from '../assets/here4.webp'
import hero8 from '../assets/here8.webp'
import hero10 from '../assets/here10.webp'
import hero9 from '../assets/here5.webp'
import hero13 from '../assets/jum4.png'
import hero14 from '../assets/jum6.jpg'


function Hero() {

    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <div className='h-[500px] mb-52 '>
        <Slider {...settings}>
      {/* 1 */}
      <div>
       <img className=' w-[600px]  
       h-[500px] ' src={hero1} alt="1" />
       </div>

{/* 2 */}
       <div>
       <img className=' w-[500px]  h-96' src={hero2} alt="2" />
       </div>
       
       {/* 3 */}
       {/* <div>
       <img className='w-[500px]  h-96' src={hero3} alt="3" />
       </div> */}
       
       {/* 4 */}
       <div>
       <img className='w-full  h-96' src={hero4} alt="4" />
       </div>

{/* 5 */}
       <div>
       <img className=' w-full h-96 ' src={hero6} alt="1" />
       </div>

       {/* 6 */}
       {/* <div>
       <img className=' w-[500px]  h-[100px] ml-96 ' src={hero7} alt="2" />
       </div> */}
       
       {/* 7 */}
       {/* <div>
       <img className='w-full  h-96' src={hero8} alt="3" />
       </div> */}
       
       {/* 8 */}
       <div>
       <img className='w-full h-96' src={hero9} alt="4" />
       </div>
       {/* 9 */}
       <div>
       <img className=' w-full  h-96' src={hero10} alt="1" />
       </div>
       
       
       
       
       
      
       
      
    </Slider>
      {/* <img src={hero1} alt="" /> */}
    </div>
  )
}

export default Hero
