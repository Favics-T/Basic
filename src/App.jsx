import React from "react";
import {
  HashRouter as Router, Route,Routes, Outlet
} from "react-router-dom"
import Root from "./layout/Root.jsx"
import Header from "./Components/Header.jsx"
import Sidebar from "./Components/Sidebar.jsx";
import Hero from "./Components/Hero.jsx"
// import Product from "./Components/Product"
import ProductDisplay from "./Components/ProductDisplay"
import Footer from "./Components/Footer"
import Home from "./Pages/Home.jsx";
import { useLoaderData } from "react-router-dom";
import Signin from "./Pages/Signin.jsx"
import Cart from "./Pages/Cart.jsx"
import Login from "./Pages/Login.jsx";
import SignUp from "./Pages/SignUp.jsx";
 import Shop from "./Pages/Shop.jsx";

const Layout =()=>{
  return (
    <>
    <Header />
   <Outlet />
    <Footer />
    </>
     )} 
     

function App() {
//   const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route path="/" element={<Layout />}>
//       <Route path="/home" element={<Home />} ></Route>
//       <Route path="/signup" element={<SignUp />}></Route>
//        <Route path="/signin" element={<Signin />}></Route>
//        <Route path="/cart" element={<Cart />}></Route>
//        <Route path="/login" element={<Login />}></Route>
//       <Route path="/shop" element={<Shop />}></Route>
//  </Route>
 // ));
  return (
    <div className="bodyFont ">
    {/* <RouterProvider router={router}></RouterProvider> */}
    <Router>
     <Routes>
     <Route path="/" element={<Layout />} >
      <Route index element = {<Home />} /> 
      <Route path="home" element={<Home />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="signin" element={<Signin />} />
            <Route path="cart" element={<Cart />} />
            <Route path="login" element={<Login />} />
            <Route path="shop" element={<Shop />} />


      </Route>
     </Routes>

    </Router>
        </div>
     )
}

export default App
