import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allproducts.products );
 // const { id, title } =products[0]
  return (
    <div>
      <p>{ /* title */}</p>
    </div>
  )
}

export default ProductComponent;