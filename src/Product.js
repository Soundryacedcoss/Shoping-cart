import React, {useContext, useState } from 'react'
import img1 from './images/football.png'
import img2 from './images/tennis.png'
import img3 from './images/basketball.png'
import img4 from './images/table-tennis.png'
import img5 from './images/soccer.png'
import { Link} from 'react-router-dom';
import products from './data';
import { DataContext } from './App'
export const Product = () => {
	const data=useContext(DataContext)
    const AddToCart=(event)=>{
        for (let i = 0; i < products.length; i++) {
			if (event.target.value===products[i].id) {
			    if (products[i].quantity<1) {
					products[i].quantity+=1
					data.cartArr.push(products[i])
					data.setCartArr([...data.cartArr])
				}
				else if(products[i].quantity>=1){
					products[i].quantity+=1
					// data.cartArr.push(products[i])
					data.setCartArr([...data.cartArr])
				//   setQuantity1(products[i].quantity+1)
				//   data.cartArr.push(quantity1)
				}
			}
		}	
    }
  return (
    <div>
		<div className='Navbar'>
        <div id="header">
		<nav>
			<ul id="menu">
				<li><a href='//'>Home</a></li>
				<li><a href="//">Products</a></li>
				<li><a href="//">Contact</a></li>
                <li><Link to={'/Cart'}>Cart{data.cartArr.length}</Link></li>
			</ul>
			
		</nav>
	</div>
	</div>
       <div id="main">
		<div id="products">
			{/* <!-- THIS SECTION WOULD BE DYNAMIC --> */}
            {/* <DataContext.Provider value={cartArr}> */}
			<div id="product-101" className="product">
            <img src={img1} alt="" />
				<h3 className="title"><a href="//">Product 101</a></h3>
				<span>Price: $150.00</span>
				<button onClick={AddToCart} className="add-to-cart" value="101" href="#" >Add To Cart</button>
				{/* <button onClick={(e)=>AddToCart(e)} className="add-to-cart" id="101" href="#" >Add To Cart</button> */}
			</div>
			<div id="product-101" className="product">
				<img src={img2} alt="" />
				<h3 className="title"><a href="//">Product 102</a></h3>
				<span>Price: $120.00</span>
				{/* <button class="add-to-cart" onClick={(e)=>AddToCart(e)} id="102"  href="#">Add To Cart</button> */}
				<button onClick={AddToCart} className="add-to-cart" value="102" href="#" >Add To Cart</button>
			</div>
			<div id="product-101" className="product">
              <img src={img3} alt="" />
				<h3 className="title"><a href="//">Product 103</a></h3>
				<span>Price: $90.00</span>
				{/* <button onClick={(e)=>AddToCart(e)} class="add-to-cart" id="103" href="#">Add To Cart</button> */}
				<button onClick={AddToCart} className="add-to-cart" value="103" href="#" >Add To Cart</button>
			</div>
			<div id="product-101" className="product">
             <img src={img4} alt="" />
				<h3 className="title"><a href="//">Product 104</a></h3>
				<span>Price: $110.00</span>
				{/* <button onClick={(e)=>AddToCart(e)} className="add-to-cart" id="104" href="#">Add To Cart</button> */}
				<button onClick={AddToCart} className="add-to-cart" value="104" href="#" >Add To Cart</button>
			</div>
			<div id="product-101" className="product">
      <img src={img5} alt="" />
				<h3 className="title"><a href="//">Product 105</a></h3>
				<span>Price: $80.00</span>
				{/* <button onClick={(e)=>AddToCart(e)} id= "105" className="add-to-cart" href="#">Add To Cart</button> */}
				<button onClick={AddToCart} className="add-to-cart" value="105" href="#" >Add To Cart</button>
			</div>
			{/* <!-- DYNAMIC SECTION ENDS HERE --> */}
			
            {/* </DataContext.Provider> */}
		</div>
	</div>
    </div>
  )
}
