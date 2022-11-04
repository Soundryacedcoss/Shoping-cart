import React, { createContext, useState } from 'react'
import img1 from './images/football.png'
import img2 from './images/tennis.png'
import img3 from './images/basketball.png'
import img4 from './images/table-tennis.png'
import img5 from './images/soccer.png'
import products from './data';
export const DataContext=createContext()

console.log(products);
export const Product = () => {
    const[AddToCartButton,setAddToCardButton]=useState("")
    const AddToCart=(event)=>{
        event.preventDefault();
        console.log(event.target.getAttribute("value"));
        setAddToCardButton(event.target.getAttribute("value"))
        // console.log(AddToCartButton);
        localStorage.setItem("value",AddToCartButton)
    }
  return (
    <div>
       <div id="main">
		<div id="products">
			{/* <!-- THIS SECTION WOULD BE DYNAMIC --> */}
            <DataContext.Provider value={AddToCartButton}>
			<div id="product-101" class="product">
      <img src={img1} alt="" />
				<h3 class="title"><a href="#">Product 101</a></h3>
				<span>Price: $150.00</span>
				<a onClick={AddToCart} class="add-to-cart" value="1" href="#">Add To Cart</a>
			</div>
			<div id="product-101" class="product">
				<img src={img2} alt="" />
				<h3 class="title"><a href="#">Product 102</a></h3>
				<span>Price: $120.00</span>
				<a onClick={AddToCart} class="add-to-cart" value="1"  href="#">Add To Cart</a>
			</div>
			<div id="product-101" class="product">
      <img src={img3} alt="" />
				<h3 class="title"><a href="#">Product 103</a></h3>
				<span>Price: $90.00</span>
				<a onClick={AddToCart} class="add-to-cart" value="1"  href="#">Add To Cart</a>
			</div>
			<div id="product-101" class="product">
      <img src={img4} alt="" />
				<h3 class="title"><a href="#">Product 104</a></h3>
				<span>Price: $110.00</span>
				<a onClick={AddToCart} class="add-to-cart" value="1" href="#">Add To Cart</a>
			</div>
			<div id="product-101" class="product">
      <img src={img5} alt="" />
				<h3 class="title"><a href="#">Product 105</a></h3>
				<span>Price: $80.00</span>
				<a  onClick={AddToCart} value= "1" class="add-to-cart"   href="#">Add To Cart</a>
			</div>
			{/* <!-- DYNAMIC SECTION ENDS HERE --> */}
            </DataContext.Provider>
		</div>
	</div>
    </div>
  )
}
