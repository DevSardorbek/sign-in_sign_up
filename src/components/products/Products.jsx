// import axios from "../../api";
// import React, { useEffect, useState } from "react";

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios
//       .get("/products")
//       .then((res) => {
//         console.log("products", res.data);
//         setProducts(res.data);
//       })
//       .catch((err) => {
//         console.error("Error fetching products:", err);
//         setError("Failed to fetch products.");
//       });
//   }, []);

//   return (
//     <div  className="product__wrapper">
//       <div className="container">
//         <h2>Products</h2>
//         {error && <p>{error}</p>}
//         <div className="product__section">
//           {products.length > 0 ? (
//             products.map((product) => (
//               <div key={product.id} className="product__item">
//                 <h3>{product.name}</h3>
//                 <p>{product.description}</p>
//                 <p>Price: ${product.price}</p>
//               </div>
//             ))
//           ) : (
//             <p>No products available.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;
