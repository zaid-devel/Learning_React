const ProductInfo = () => {
    const product = {
        name: "Laptop",
        price: "$500",
        availability: "In stock",
    }
  return (
    <div>
        <h1> Product Name is {product.name}, the price of the product is {product.price}, and availability is {product.availability}</h1>
    </div>
  )
}

export default ProductInfo