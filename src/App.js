import './App.css';
import { Cart } from './Cart';
import { Navbar } from './Navbar';
import { Product } from './Product';
function App() {
  return (
    <div className="App">

  <Navbar/>
  <Product/>
  <Cart/>
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
