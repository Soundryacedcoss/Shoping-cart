import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import products from './data';
import { Product } from './Product';
import { DataContext } from './Product';
export const Navbar = () => {
  const value1=useContext(DataContext)
    const[Cartvalue,setCartvalue]=useState();
    // const[getValue,setGetvalue]=useState()
    // let userlogdata=localStorage.getItem("value",getValue)
    // var userlogdata1=parseInt(userlogdata)
    // console.log(userlogdata1);
      
      console.log(value1);
      
    // setCartvalue(userlogdata1+1)
  return (
    // const dataContextValue=useContext()
    <>
   
    <div className='Navbar'>
        <div id="header">
		<nav>
			<ul id="menu">
				<li><a href="#">Home</a></li>
				<li><a href="#">Products</a></li>
				<li><a href="#">Contact</a></li>
        <li><Link to={'./Cart'}>Cart</Link></li>  
			</ul>
		</nav>
    <p>{Cartvalue}jko</p>
	</div>
    </div>
    <Product/>
    </>
  )
}
