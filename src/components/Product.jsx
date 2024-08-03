const products = [
	{ title: 'Cabbage', isFruit: false, id: 1 },
	{ title: 'Garlic', isFruit: false, id: 2 },
	{ title: 'Apple', isFruit: true, id: 3 },
  ];

const Product = () => {
	const items = products.map((product) => (
		<li key={product.id} style={{
			color: product.isFruit ? 'green' : 'black',
		}}>{product.title}</li>
	));
	return (
		<div>
			<ul>{items}</ul>
		</div>
	);
};

export default Product;
