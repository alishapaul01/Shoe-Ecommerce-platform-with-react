import Modal from '../UI/Modal';
import CartItem from "./CartItem";
import { useContext } from "react";
import { ProductsContext } from "../Context/ProductContext";
import classes from './Cart.module.css'


const Cart = (props) => {
	const { state } = useContext(ProductsContext);
	
	const onCloseHandler = (e) => {
		props.setCart(false);
	};
	return (
		<Modal><div className={classes.heading}>
			<h1>Cart</h1>
			</div>
			<CartItem/>
			<div className={classes.total}>
				<h1>Total Amount</h1>
				<h1>{ Number(state.cartTotal)}</h1>
			</div>
			<div className={classes.button}>
				<button onClick={onCloseHandler}>Close</button>
				<button>Order</button>
			</div>
		</Modal>
	);
}

export default Cart;