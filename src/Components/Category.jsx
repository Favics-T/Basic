import React from 'react'
import Images0 from '../assets/HomaApp.webp'
import Images1 from '../assets/Personal.webp'
import Images2 from '../assets/Power.webp'
import Images3 from '../assets/SmartOffice.webp'
import Images4 from '../assets/audio.webp'
const Category = () => {
  return (
    <div className='mt-11 ml-28 rounded-md'>

        <div>
            <img className='rounded-2xl' src={Images4} alt="" />
        </div>





        <div className='flex flex-col'>

<div className='flex mt-10 '>
<img className='pr-5 rounded-2xl' src={Images2} alt="" />
<img className='rounded-2xl' src={Images3} alt="" />
</div>


<div className='flex mt-10'>
    <img className='pr-5 rounded-2xl' src={Images1} alt="" />
    <img className='rounded-2xl' src={Images0} alt="" />
</div>
        </div>
      






    </div>
  )
}

export default Category
