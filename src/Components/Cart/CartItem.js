import { useContext } from "react";

import { ProductsContext } from "../Context/ProductContext";
import SingleCartList from "./SingleCartList";

const CartItem = (props) => {
	const { state } = useContext(ProductsContext);
	return (
		<ul>
			{state.cartItems.map((item) => {
				return(
					<SingleCartList
						key={item.id}
						ShoeName={item.ShoeName}
						description={item.description}
						price={item.price}
						large={item.large}
						small={item.small}
						medium={item.medium}
					/>
				);
			})}
		</ul>
	);
};

export default CartItem;