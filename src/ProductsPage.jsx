import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";
import { ProductsShow } from "./ProductsShow";
import { Modal } from "./Modal"; 
import  axios from 'axios';
import { useState, useEffect } from 'react';

export function ProductsPage() {
  // var firstArray = "testJPAtest";
  const [products, setProducts] = useState([]);
  const [isProductsShowVisible, setIsProductsShowVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});


  const getProductData = () => {
    axios.get("http://localhost:3000/products.json").then(response => {
      setProducts(response.data)
    })
  }
  // var products = [
  //   {
  //     id: 1,
  //     name: "Vic Virth Sticks",
  //     description: "Description about Vic Virth Sticks",
  //     image_url:
  //       "https://vicfirth.com/cdn/shop/files/Drumsticks-Video-Thumbnail_65b5077c-d46d-4e26-92f2-16a879d7b6ae.jpg?v=1684500798&width=3840",
  //   },
  //   {
  //     id: 2,
  //     name: "Martin Guitar D16",
  //     description: "Description about Martin Guitar",
  //     image_url:
  //       "https://rvb-img.reverb.com/image/upload/s--B8IansJL--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_1600,q_80,w_1600/v1435852718/smii1tzgffx1iqrgb9hh.jpg",
  //   },
  // ];
const showModal = (product) => {
  console.log("showing the modal");
  console.log(product);
  setCurrentProduct(product)
  setIsProductsShowVisible(true)
}

const closeModal = () => {
  console.log("closing the modal");
  setIsProductsShowVisible(false)

}

useEffect(getProductData, []);

  return (
    <main>
      {/* <button onClick={showModal}>Show The Modal</button> */}
      <Modal show={isProductsShowVisible} onClose={closeModal} products={products}>
      <ProductsShow product={currentProduct}/>
        </Modal>
      <ProductsNew />
      <ProductsIndex products={products} onShow={showModal}/>
    </main>
  );
}
