import React, { useState } from "react";
import "./App.css";
import SellerForm from './Components/Seller/SellerForm';
import CartBtn from './Components/Cart/CartBtn';
import ProductsList from './Components/Products/ProductsList';
import Cart from './Components/Cart/Cart';
import { ProductsContextProvider } from './Components/Context/ProductContext'
const App = (props) => {
	const [isCart, setCart] = useState(true);
	return (
		<ProductsContextProvider>
			{isCart && <Cart isCart={isCart} setCart={setCart} />}
			<div className="navbar">
				<SellerForm />
				<CartBtn isCart={isCart} setCart={setCart} />
			</div>
			<ProductsList />
		</ProductsContextProvider>
	);
};
export default App;