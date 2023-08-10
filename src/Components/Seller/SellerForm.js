import classes from './SellerForm.module.css';
import { useRef, useContext } from "react";
import { ProductsContext } from '../Context/ProductContext';

const SellerForm = (props) => {
	const shoeName = useRef(null);
	const description = useRef(null);
	const price = useRef(null);
	const small = useRef(null);
	const medium = useRef(null);
	const large = useRef(null);

	const { Dispatch } = useContext(ProductsContext);
	const formSubmitHandler = (e) => {
		e.preventDefault();
		let obj = {
			ShoeName: shoeName.current.value,
			description: description.current.value,
			price: price.current.value,
			small: small.current.value,
			medium: medium.current.value,
			large: large.current.value,
			id: Math.random(),
		};
		Dispatch({ type: "ADD_PROD_2_LIST", product: obj });
	};
	return (
		<form
			className={classes.sellerform}
			onSubmit={formSubmitHandler}>
			<div className={classes.inputdiv}>
				<label>Shoe Name</label>
				<input type="text" ref={shoeName}></input>
			</div>
			<div className={classes.inputdiv}>
				<label>Description</label>
				<input type="text" ref={description}></input>
			</div>
			<div className={classes.inputdiv}>
				<label>Price</label>
				<input type="number" ref={price}></input>
			</div>
			<div className={classes.sizes}>
				<div className={classes.indiSizes}>
					<label>L</label>
					<input type="number" ref={large}></input>
				</div>
				<div className={classes.indiSizes}>
					<label>M</label>
					<input type="number" ref={medium}></input>
				</div>
				<div className={classes.indiSizes}>
					<label>S</label>
					<input type="number" ref={small}></input>
				</div>
			</div>
			<div>
				<button>Add Product</button>
			</div>
		</form>
	);
};
export default SellerForm;