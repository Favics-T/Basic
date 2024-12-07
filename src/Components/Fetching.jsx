import React from 'react'
import { useState,useEffect } from 'react'


function Fetching() {

    const [data, setData] = useState([])

  useEffect(() =>{
    fetch('https://fakestoreapi.com/products/category/electronics')
    .then(response => response.json())
    .then(json => setData(json))
    .catch(err => console.log(err))
  },[])
  return (
    <>
    <div className='mt-96'>
      {
        data.map((item) =>
        (
           < div>
           <img src={item.image} alt="" />

           Uncaught Syntaxerror: The requested module '/node_modules/.vite/deps/react-redux.js?v=e862d237' does not provide an export named 'store' 
           <h2 key={item.id}>{item.title } </h2>  
            </div>



        )
        
        )
      }
    </div>

    </>
  )
}

export default Fetching
