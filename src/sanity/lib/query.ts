// import { defineQuery } from "next-sanity";

// export const allProducts = defineQuery(
//   `
//   *[_type == "newProducts"]{
//     id,
//     name,
//     "imageUrl": imageUrl.asset->url,
//     price,
//     description,
//     discountPercentage,
//     isFeaturedProduct,
//     stockLevel,
//     category
//   }
//   `
// );
import { defineQuery } from "next-sanity";

export const allProducts = defineQuery(`
  *[_type == "newProducts"]{
    "id": _id,
    name,
    "imageUrl": imageUrl.asset->url,
    price,
    description,
    discountPercentage,
    isFeaturedProduct,
    stockLevel,
    category
  }
`);

export const productById = defineQuery(`
  *[_type == "newProducts" && _id == $id][0] {
    "id": _id,
    name,
    "imageUrl": imageUrl.asset->url,
    price,
    description,
    stockLevel,
    category,
    specifications,
    discountPercentage,
    isFeaturedProduct
  }
`);