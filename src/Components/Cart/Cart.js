import Modal from '../UI/Modal';

import CartItem from "./CartItem";
import { useContext } from "react";
import { ProductsContext } from "../Context/ProductContext";


const Cart = (props) => {
	const { state } = useContext(ProductsContext);
	const customStyles = {
		content: {
			top: "20%",
			left: "20%",
			right: "20%",
			bottom: "20%",
		},
	};
	const onCloseHandler = (e) => {
		props.setCart(false);
	};
	return (
		<Modal
			isOpen={props.isCart}
			onRequestClose={() => {
				props.setCart(false);
			}}
			style={customStyles}>
			<h1 style={{ textAlign: "center" }}>Cart</h1>
			<CartItem/>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					padding: "0 1rem 0",
					marginBottom: "1rem",
				}}>
				<h1>Total Amount</h1>
				<h1>{ Number(state.cartTotal)}</h1>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "flex-end",
				}}>
				<button onClick={onCloseHandler}>Close</button>
				<button style={{ marginLeft: "1rem" }}>
					Order
				</button>
			</div>
		</Modal>
	);
};

export default Cart;