import React from 'react'
import Slider from "react-slick";
import hero1 from '../assets/new.png'
import hero2 from '../assets/jum0.png'
import hero3 from '../assets/imagees6.avif'
import hero4 from '../assets/imagees8.avif'
import hero6 from '../assets/jums4.jpg'
import hero7 from '../assets/audio.webp'
import hero8 from '../assets/hero3.webp'
import hero10 from '../assets/jum2.png'
import hero12 from '../assets/jum3.png'
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
    <div className=''>
        <Slider {...settings}>
      <div>
       <img className=' w-full  h-96' src={hero1} alt="1" />
       </div>

       <div>
       <img className=' w-full  h-96' src={hero2} alt="2" />
       </div>
       
       <div>
       <img className='w-full  h-96' src={hero3} alt="3" />
       </div>
       
       <div>
       <img className='w-full  h-96' src={hero4} alt="4" />
       </div>

       <div>
       <img className=' w-full  h-96' src={hero6} alt="1" />
       </div>

       {/* ora */}
       <div>
       <img className=' w-full  h-96' src={hero7} alt="2" />
       </div>
       
       <div>
       <img className='w-full  h-96' src={hero8} alt="3" />
       </div>
       
       <div>
       {/* <img className='w-full' src={hero9} alt="4" /> */}
       </div>
       <div>
       <img className=' w-full  h-96' src={hero10} alt="1" />
       </div>
       
       
       
       
       
      
       
      
    </Slider>
      {/* <img src={hero1} alt="" /> */}
    </div>
  )
}

export default Hero
