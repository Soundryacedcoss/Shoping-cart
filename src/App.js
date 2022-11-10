import { Route, Routes } from 'react-router-dom';
import React, { createContext, useState } from 'react'
import './App.css';
import { Cart } from './Cart';
import { Navbar } from './Navbar';
import { Product } from './Product';
export const DataContext=createContext()
function App() {
	const[cartArr,setCartArr]=useState([])
  return (
    <div className="App">
   <DataContext.Provider value={{cartArr,setCartArr}}>
	<Routes>
	<Route path='/' element={<Product/>}></Route>
  {/* <Route path='/' element={<Navbar/>}></Route> */}
	<Route path='/Cart' element={<Cart/>}></Route>
	</Routes>
	</DataContext.Provider>
    <div>
    </div>
	<p id="p1"></p>
    </div>
  );
}

export default App;
