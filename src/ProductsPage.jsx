import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";

export function ProductsPage() {
  var firstArray = "testJPAtest";
  var products = [
    {
      id: 1,
      name: "Vic Virth Sticks",
      description: "Description about Vic Virth Sticks",
      image_url:
        "https://vicfirth.com/cdn/shop/files/Drumsticks-Video-Thumbnail_65b5077c-d46d-4e26-92f2-16a879d7b6ae.jpg?v=1684500798&width=3840",
    },
    {
      id: 2,
      name: "Martin Guitar D16",
      description: "Description about Martin Guitar",
      image_url:
        "https://rvb-img.reverb.com/image/upload/s--B8IansJL--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_1600,q_80,w_1600/v1435852718/smii1tzgffx1iqrgb9hh.jpg",
    },
  ];

  return (
    <main>
      <ProductsNew />
      <ProductsIndex myData={firstArray} products={products} />
    </main>
  );
}
