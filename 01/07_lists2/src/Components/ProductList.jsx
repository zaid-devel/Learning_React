const ProductList = () => {
    const product = [
    {id: 1, name: 'Phone', price: '$600'},
    {id: 2, name: 'Laptop', price: '$1200'},
    {id: 3, name: 'Headphone', price: '$200'}
];
  return (
    <div>
        {product.map((product)=>(
            <div key={product.id}>
                <h1>Product id: {product.id}</h1>
                <h1>Product name: {product.name}</h1>
                <h1>Product price: {product.price}</h1>
                <br />
            </div>
        ))}
    </div>
  )
}

export default ProductList