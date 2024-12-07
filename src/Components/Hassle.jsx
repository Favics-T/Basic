import React from 'react'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PriceCheckOutlinedIcon from '@mui/icons-material/PriceCheckOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';

const Hassle = () => {
  return (
    <div className='bg-'>

    
    <div className='bg-gray-200  rounded-xl p-10 h-42 w-auto mr-11 mt-16 mb-11  ml-10 flex'>
      
      <div className='ml flex'>
      <LocalShippingOutlinedIcon className='w-6 h-48' />
      <h1 className='ml-2'>Free Shipping NationWide</h1>
      
      </div>

      <div className='ml-96 flex'>
        <PriceCheckOutlinedIcon />
        <h1 className='ml-2'>Cash On Delivery</h1>
      </div>

      <div className='ml-96 flex'>
        <HandshakeOutlinedIcon />
        <h2>Hassle Free Warrant</h2>
      </div>

      </div>
     
    </div>
  )
}

export default Hassle
