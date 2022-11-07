import React, { useContext } from 'react'
import { DataContext } from './Product'
export const Cart = () => {
const productData=useContext(DataContext)
console.log(productData);
return(
  <div></div>
);
}