import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from './App'
export const Cart = () => {
const[Price,setPrice]=useState()
const productData=useContext(DataContext)
const IncreaseHandler=(val)=>{
  console.log('hii');
  for (let i = 0; i < productData.cartArr.length; i++) {
    if(val===productData.cartArr[i].id){
      productData.cartArr[i].quantity+=1
      productData.setCartArr([...productData.cartArr])
    }
  }
}
const DecreseHandler=(val)=>{
  for (let i = 0; i < productData.cartArr.length; i++) {
    if(val===productData.cartArr[i].id){
      if(productData.cartArr[i].quantity<=1){
        productData.cartArr.splice(i,1)
        productData.setCartArr([...productData.cartArr])
      }
      else{
        productData.cartArr[i].quantity -=1
        productData.setCartArr([...productData.cartArr])
      }
    }
  }
}
 
console.log(productData.cartArr);
let totalprice=0;
useEffect (()=>{
  for (let i = 0; i < productData.cartArr.length; i++) {
    totalprice+=productData.cartArr[i].quantity*productData.cartArr[i].price
 console.log(productData.cartArr[i].quantity*productData.cartArr[i].price);
 setPrice(totalprice)
 console.log(Price);
//  <Navigate to='/' ></Navigate>
}
})

return(
 <center>
  <table border="2px">
    <tr>
      <th>Id</th><th>Name</th><th>Price</th> <th>Product</th> <th>Quantity</th>
      </tr>
    {productData.cartArr.map((item)=>
    <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td><img src={item.image} alt="" /></td>
      <td><button onClick={() => IncreaseHandler(item.id)}>+</button>{item.quantity}<button onClick={() => DecreseHandler(item.id)}>-</button></td>
      </tr>
      )}
       <p >{Price}</p>
  </table>
 
  </center>
);
}