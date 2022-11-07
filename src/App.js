import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Cart } from './Cart';
import { Navbar } from './Navbar';
import { Product } from './Product';
function App() {
  return (
    <div className="App">
	<Routes>
	<Route path='/' element={<Navbar/>}></Route>
	{/* <Route path='/' element={<Product/>}></Route> */}
	<Route path='/Cart' element={<Cart/>}></Route>
	</Routes>
  
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
