// import React,{useContext} from 'react'
import ProductDisplay from '../Components/ProductDisplay'
import Hero from '../Components/Hero'
import Product from '../Components/Product'
// import { ProductContext } from '../Context/ProductContext'
import Hassle from '../Components/Hassle'
import Category from '../Components/Category'
import Trusted from '../Components/Trusted'
import Fetching from '../Components/Fetching'
import HeaderBottom from '../Components/HeaderBottom'
function Home() {

  // const {products} = useContext(ProductContext)
  // console.log(products)
  return (
    <div>
      <HeaderBottom />
      <Hero />
      <Hassle />
      {/* <Category /> */}
      <ProductDisplay />
      {/* <Product /> */}
      {/* <Trusted /> */}
      {/* <Fetching /> */}
    </div>
  )
}

export default Home
