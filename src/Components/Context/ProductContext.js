import React, { useReducer } from "react";

export const ProductsContext = React.createContext();

let tempproducts = [
	{
		id: "m1",
		ShoeName: "Adidas",
		description: "100% cotton",
		price: 1000,
		large: 97,
		small: 20,
		medium: 102,
	},
	{
		id: "m2",
		ShoeName: "Nike",
		description: "Lightweight and durable",
		price: 2000,
		large: 120,
		small: 15,
		medium: 75,
	},
	{
		id: "m3",
		ShoeName: "Puma",
		description: "Comfortable and stylish",
		price: 3000,
		large: 80,
		small: 25,
		medium: 90,
	},

];

let tempCartItmes=[];
const reducer = (state, action) => {
	switch (action.type) {
		case "INC_CART_SIZE": {
			return {
				...state,
				itemsInCart: state.itemsInCart + 1,
			};
		}
		case "ADD_PROD_2_LIST": {
			let newArr = [...state.products, action.product];
			return { ...state, products: newArr };
		}
		case "ADD_PROD_2_CART": {
			let prod = state.products.filter(
				(item) => item.id === action.id
			);
			let cartfind = state.cartItems.find(
				(item) => item.id === prod[0].id
			);

			let newArr;
			if (cartfind) {
				let tempArr = state.cartItems.filter(
					(item) => item.id !== cartfind.id
				);
				let newobj = {
					id: prod[0].id,
					ShoeName: prod[0].ShoeName,
					price: prod[0].price,
					small: cartfind.small,
					large: cartfind.large,
					medium: cartfind.medium,
				};
				if (action.size === "small")
					newobj.small = +newobj.small + 1;
				else if (action.size === "large")
					newobj.large = +newobj.large + 1;
				else newobj.medium = +newobj.medium + 1;
				newArr = [...tempArr, newobj];
			} else {
				let newProd = {
					id: prod[0].id,
					ShoeName: prod[0].ShoeName,
					price: prod[0].price,
					small: 0,
					large: 0,
					medium: 0,
				};

				if (action.size === "small") newProd.small = 1;
				else if (action.size === "large") newProd.large = 1;
				else newProd.medium = 1;
				newArr = [...state.cartItems, newProd];
			}

			return { ...state, cartItems: newArr};
		}
		case "INC_CART_TOTAL": {
			return {
				...state,
				cartTotal: state.cartTotal + action.newPrice,
			};
		}
		default:
			return state;
	}
};
export const ProductsContextProvider = (props) => {
	const [state, Dispatch] = useReducer(reducer, {
		itemsInCart: 0,
		products: tempproducts,
		cartItems: tempCartItmes,
		cartTotal: 0,
	});
	return (
		<ProductsContext.Provider value={{ state, Dispatch }}>
			{props.children}
		</ProductsContext.Provider>
	);
};