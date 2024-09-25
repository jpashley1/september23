export function ProductsIndex(props) {

  return (
    <div id="products-index">
      <h1>All Products</h1>
      <div>
        {props.products.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <img src={product.images[0].url}></img>
            <p>Price: ${product.price} </p>
            <button onClick={() => props.onShow(product)}>product info</button>
          </div>
        ))}
      </div>
    </div>
  );
}
