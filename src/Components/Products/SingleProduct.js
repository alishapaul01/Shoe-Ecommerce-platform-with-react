
import React, { useReducer } from "react";
import { useContext } from "react";
import { ProductsContext } from '../Context/ProductContext';
import classes from './SingleProduct.module.css';
const sizeReducer = (state, action) => {
	switch (action.type) {
		case "SMALL_COUNT_DEC": {
			return { ...state, smallCount: state.smallCount - 1 };
		}
		case "LARGE_COUNT_DEC": {
			return { ...state, largeCount: state.largeCount - 1 };
		}
		case "MEDIUM_COUNT_DEC": {
			return {
				...state,
				mediumCount: state.mediumCount - 1,
			};
		}
		default:
			return state;
	}
};
const SingleProduct = (props) => {
	const { Dispatch } = useContext(ProductsContext);
	const [sizeState, sizeDispatch] = useReducer(
		sizeReducer,
		{
			smallCount: props.small,
			largeCount: props.large,
			mediumCount: props.medium,
		}
	);
	const onSmallClick = (e) => {
		Dispatch({ type: "INC_CART_SIZE" });
		Dispatch({
			type: "ADD_PROD_2_CART",
			size: "small",
			id: props.id,
		});
		console.log(props);
		Dispatch({
			type: "INC_CART_TOTAL",
			newPrice: props.price,
		});
		sizeDispatch({ type: "SMALL_COUNT_DEC" });
	};
	const onLargeClick = (e) => {
		Dispatch({
			type: "INC_CART_TOTAL",
			newPrice: props.price,
		});
		Dispatch({ type: "INC_CART_SIZE" });
		Dispatch({
			type: "ADD_PROD_2_CART",
			size: "large",
			id: props.id,
		});

		sizeDispatch({ type: "LARGE_COUNT_DEC" });
	};
	const onMediumClick = (e) => {
		Dispatch({ type: "INC_CART_SIZE" });
		Dispatch({
			type: "ADD_PROD_2_CART",
			size: "medium",
			id: props.id,
		});
		Dispatch({
			type: "INC_CART_TOTAL",
			newPrice: props.price,
		});

		sizeDispatch({ type: "MEDIUM_COUNT_DEC" });
	};
	return (
		<div className={classes.product}>
			<div className={classes.details}>
				<h3>{props.ShoeName}</h3>
				<h3>{props.description}</h3>
				<h3>{props.price}</h3>
			</div>
			<div className={classes.buttons}>
				<button onClick={onLargeClick}>
					Buy large ({sizeState.largeCount})
				</button>
				<button onClick={onMediumClick}>
					Buy medium ({sizeState.mediumCount})
				</button>
				<button onClick={onSmallClick}>
					Buy small ({sizeState.smallCount})
				</button>
			</div>
		</div>
	);
};

export default SingleProduct;