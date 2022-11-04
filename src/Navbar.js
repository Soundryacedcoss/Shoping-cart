import React, { useContext, useState } from 'react'

export const Navbar = () => {
    const[Cartvalue,setCartvalue]=useState();
    const[getValue,setGetvalue]=useState()
    let userlogdata=localStorage.getItem("value",getValue)
    var userlogdata1=parseInt(userlogdata)
    console.log(userlogdata1);
    // setCartvalue(userlogdata1+1)
  return (
    // const dataContextValue=useContext()
    
    <div className='Navbar'>
        <div id="header">
		<nav>
			<ul id="menu">
				<li><a href="#">Home</a></li>
				<li><a href="#">Products</a></li>
				<li><a href="#">Contact</a></li>
                <li><a href="">Cart</a></li>
                {/* <p>{Cartvalue}</p> */}
			</ul>
		</nav>
	</div>
    </div>
  )
}
