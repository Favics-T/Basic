import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';


const Footer = () => {
  return (
    <div className='mt-10 text-black'>

        <div className='bg-blue-100 text-black

         h-96  flex pl-40 pt-7'>


        {/* CUSTOMER SERVICE STARTS HERE */}
        
            <div className='footer flex-col-reverse'>
                <h1 className='text-black mb-5 font-bold'>CUSTOMER SERVICE</h1>
                <ul>
                    <li>Service Hours:

</li>
                    <li>Monday-Friday 9AM to 6PM</li>
                    <li>Phone:</li>
                    <li>+234 818 135 3103 (First Choice)
                    </li>
                    <li>+234 809 604 0753
                    </li>
                    <li>Email:</li>
                    <li>care.ng@oraimo.com</li>
                    <li>WhatsApp:</li>
                    <li>+234 916 459 8060/ +234 818 642 3337

                    </li>
                </ul>
            </div>
        {/* CUSTOMER SERVICE ENDS HERE */}


         {/* About HOMS STARTS HERE */}




         <div className='footer flex-col-reverse'>
                <h1 className='text-black mb-5 font-bold'> ABOUT</h1>
                <ul>
                    <li>About Us</li>
                    <li>Where to Buy</li>
                    <li>O-CLUB</li>
                    <li>Explorer Point Program
                    </li>
                </ul>
            </div>
              {/* About Homs ENDS HERE */}

       

         {/* Terms STARTS HERE */}
        
         <div className='footer flex-col-reverse'>
                <h1 className='text-ite font-bold mb-5'> TERMS</h1>
                <ul>
                <li>Warranty</li>
                <li>Shipping & Delivery</li>
                <li>Return & Refund Policy</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                </ul>

            </div>
        {/* TERMS ENDS HERE */}


         {/* HELP STARTS HERE */}
         <div className='footer flex-col-reverse'>
                <h1 className='text-wite font-bold mb-5'> HELP</h1>

                <ul>
                    <li> Get Help</li>
                    <li>Track Order</li>
                    <li>Visit Carlcare</li>
                    <li>Contact Us</li>
                    <li>Online Shopping Guide</li>
                    <li>Product Authentication</li>
                </ul>
               





            </div>
        {/* HELP ENDS HERE */}





</div>

         {/* FOOTER BOTTOM STARTS HERE */}

         <div className='bg-gray-800 h-28 w-full'>
            <h1> SOCIAL MEDIA HANDLES</h1>

            <InstagramIcon />
            <FacebookIcon />
            <XIcon />

         </div>
        
        {/*  FOOTER BOTTOM ENDS HERE */}
    </div>
  )
}

export default Footer
