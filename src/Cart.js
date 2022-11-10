import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from './App'
export const Cart = () => {
  const[Price,totalPrice]=useState()
// const[dataArr,setDataArr]=useState([])
const productData=useContext(DataContext)
console.log(productData.cartArr);
for (let i = 0; i < productData.cartArr.length; i++) {
console.log(productData.cartArr.quantity);
}
return(
 <center>
  <table border="2px">
    <tr>
      <th>Id</th><th>Name</th><th>Price</th><th>Quantity</th>
      </tr>
    {productData.cartArr.map((item)=>
    <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td><button>+</button>{item.quantity}<button>-</button></td>
      </tr>
      )}
  </table>
  <p>{Price}</p>
  </center>
);
}