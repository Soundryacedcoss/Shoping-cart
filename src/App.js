import { Route, Routes } from 'react-router-dom';
import React, { createContext, useState } from 'react'
import products from './data';
import img1 from './images/football.png'
import img2 from './images/tennis.png'
import img3 from './images/basketball.png'
import img4 from './images/table-tennis.png'
import img5 from './images/soccer.png'
import './App.css';
import { Cart } from './Cart';
import { Navbar } from './Navbar';
import { Product } from './Product';
export const DataContext=createContext()
function App() {
	const[cartArr,setCartArr]=useState([])
    const AddToCart=(event)=>{
		console.log(event.target.id);
        for (let i = 0; i <= products.length; i++) {
			// console.log(products[0].id);
			if (event.target.value===products[i].id) {
				console.log('if');
				var obj={
					id:products[i].id,
					name:products[i].name
				}
				cartArr.push(obj)
		        setCartArr([...cartArr])
		        console.log(cartArr);
			}
		}
	}
  return (
    <div className="App">
   <DataContext.Provider value={cartArr}>

  
	<Routes>
	<Route path='/' element={<Navbar/>}></Route>
	{/* <Route path='/' element={<Product/>}></Route> */}
	<Route path='/Cart' element={<Cart/>}></Route>
	</Routes>
	</DataContext.Provider>
    <div>
       <div id="main">
		<div id="products">
			{/* <!-- THIS SECTION WOULD BE DYNAMIC --> */}
            {/* <DataContext.Provider value={cartArr}> */}
			<Cart/>
			<div id="product-101" class="product">
            <img src={img1} alt="" />
				<h3 class="title"><a href="//">Product 101</a></h3>
				<span>Price: $150.00</span>
				<button onClick={AddToCart} class="add-to-cart" value="101" href="#" >Add To Cart</button>
	
			</div>
			<div id="product-101" class="product">
				<img src={img2} alt="" />
				<h3 class="title"><a href="//">Product 102</a></h3>
				<span>Price: $120.00</span>
				
				<button onClick={AddToCart} class="add-to-cart" value="102" href="#" >Add To Cart</button>
			</div>
			<div id="product-101" class="product">
      <img src={img3} alt="" />
				<h3 class="title"><a href="//">Product 103</a></h3>
				<span>Price: $90.00</span>
				
				<button onClick={AddToCart} class="add-to-cart" value="103" href="#" >Add To Cart</button>
			</div>
			<div id="product-101" class="product">
      <img src={img4} alt="" />
				<h3 class="title"><a href="//">Product 104</a></h3>
				<span>Price: $110.00</span>
				
				<button onClick={AddToCart} class="add-to-cart" value="104" href="#" >Add To Cart</button>
			</div>
			<div id="product-101" class="product">
      <img src={img5} alt="" />
				<h3 class="title"><a href="//">Product 105</a></h3>
				<span>Price: $80.00</span>
				
				<button onClick={AddToCart} class="add-to-cart" value="105" href="#" >Add To Cart</button>
			</div>
			{/* <!-- DYNAMIC SECTION ENDS HERE --> */}
			
            {/* </DataContext.Provider> */}
		</div>
	</div>
    </div>
	<div id="footer">
		<nav>
			<ul id="footer-links">
				<li><a href="#">Privacy</a></li>
				<li><a href="#">Declaimers</a></li>
				<button id="empty" onClick="window.location.reload(true)">Empty Cart</button>
			</ul>
		</nav>
	</div>
	<p id="p1"></p>
    </div>
  );
}

export default App;
