import React, { useContext } from "react";
import SingleProduct from '../Products/SingleProduct';
import { ProductsContext } from '../Context/ProductContext'

const ProductsList = (props) => {
	const { state } = useContext(ProductsContext);
	return state.products.map((singleProd) => {
		return (
			<SingleProduct
				key={singleProd.id}
				id={singleProd.id}
				ShoeName={singleProd.ShoeName}
				description={singleProd.description}
				price={singleProd.price}
				large={singleProd.large}
				small={singleProd.small}
				medium={singleProd.medium}
			/>
		);
	});
};

export default ProductsList;