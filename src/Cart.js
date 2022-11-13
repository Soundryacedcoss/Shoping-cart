import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "./App";
import { Navigate } from "react-router-dom";
import './App.css'
import { Link} from 'react-router-dom';
export const Cart = () => {
  const [Price, setPrice] = useState();
  const[Emptymsg,setEmptyMsg]=useState({display:"none"})
  const[Display,setDisplay]=useState()
  const productData = useContext(DataContext);
  const IncreaseHandler = (val) => {
    console.log("hii");
    for (let i = 0; i < productData.cartArr.length; i++) {
      if (val === productData.cartArr[i].id) {
        productData.cartArr[i].quantity += 1;
        productData.setCartArr([...productData.cartArr]);
      }
    }
  };
  const DecreseHandler = (val) => {
    for (let i = 0; i < productData.cartArr.length; i++) {
      if (val === productData.cartArr[i].id) {
        alert("Warning ! your product will delete from cart")
        if (productData.cartArr[i].quantity <= 1) {
          productData.cartArr.splice(i, 1);
          productData.setCartArr([...productData.cartArr]);
        } else {
          productData.cartArr[i].quantity -= 1;
          productData.setCartArr([...productData.cartArr]);
        }
      }
    }
  };

  console.log(productData.cartArr);
  let totalprice = 0;
  useEffect(() => {
    for (let i = 0; i < productData.cartArr.length; i++) {
      totalprice +=
        productData.cartArr[i].quantity * productData.cartArr[i].price;
      console.log(
        productData.cartArr[i].quantity * productData.cartArr[i].price
      );
      setPrice(totalprice);
      console.log(Price);
       <Navigate to='/' ></Navigate>
    }
    if (productData.cartArr.length===0) {
      setDisplay({display :"none"})
      setEmptyMsg({display:"block"})
    }
  },[productData.cartArr]);
  const BuyButtonHandler=(e)=>{
    if(e.target.value=true){
      alert("Thank you for Shopping 😊")
    }

  }
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <center className='CartNavbar'>
      <div  className='CartNavbar'>
        <div id="header">
		  <nav>
			<ul id="menu">
				<li><Link to={'/'}>Home</Link></li>
				<li><a href="//">Products</a></li>
				<li><a href="//">Contact</a></li>
        <li><Link to={'/Cart'}>Cart{productData.cartArr.length}</Link></li>
			</ul>
		</nav>
	</div>
  </div>
  <p style={Emptymsg}>Your CART is empty</p>
      <div style={Display} className="cartDiv ">
        {productData.cartArr.map((item) => (
          <div className="flex">
            <div className="CartImgDiv">
              <img src={item.image} alt="" />
            </div>{" "}
            <div className="ProductNameDiv">
              {" "}
              <p>{item.name}</p> <p>{item.price}</p>
            </div>{" "}
            <div>
            <button className="button" onClick={() => IncreaseHandler(item.id)}>+</button>
            <b>{item.quantity}</b>
            <button className="button" onClick={() => DecreseHandler(item.id)}>-</button>{" "}
            </div>
          </div>
        ) )}
        
      </div>
      
      <p style={Display} className="TotalPrice">Total: {Price}</p> <br />
       <br />
       <div style={Display}>
       <button onClick={BuyButtonHandler} className="Button1">Buy Now</button>
      <button className="Button1" onClick={refreshPage}>Empty Cart</button>
      </div>
    </center>
  );
};
