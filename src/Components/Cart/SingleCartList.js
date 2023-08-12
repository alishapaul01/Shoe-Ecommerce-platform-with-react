import './SingleCartList.css'
const SingleCartList = (props) => {
	let total = props.price * (props.large + props.small + props.medium);

	return (
		<li className="singleCart--item">
			<div>{props.ShoeName}</div>
			<div>{props.large} L</div>
			<div>{props.medium} M</div>
			<div>{props.small} S</div>
			<div>{props.price}</div>
			<div>{total}</div>
		</li>
	)
};
export default SingleCartList;