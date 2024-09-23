export function ProductsNew() {
  return (
    <div id="products-new">
      <h1>List New Product</h1>
      <form>
        <div>
          Product Name: <input name="name" type="text" />
        </div>
        <div>
          Price: <input name="price" type="text" />
        </div>
        <div>
          Desciption: <input name="description" type="text" />
        </div>
        <div>
          Stock: <input name="stock" type="text" />
        </div>
        <div>
          Sypplier: <input name="supplier_id" type="text" />
        </div>
        <button type="submit">List Product</button>
      </form>
    </div>
  );
}
