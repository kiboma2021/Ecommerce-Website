import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProducts, removeSelectedProduct } from "../Redux/Actions/productActions";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const {image, title, price, category, description } = product;
  const { productid } = useParams();
  const dispatch = useDispatch();
  console.log(product);

  const fetchProductDetail = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${productid}`).catch(err => {
      console.log("Error",err)
    });
    dispatch(selectedProducts(response.data));
  };
  useEffect(() => {
    if (productid && productid !== "") fetchProductDetail();
    return () => {
      dispatch(removeSelectedProduct());
    }
  }, [productid]);
  return (
    <div>
      {Object.keys(product).length === 0 ? (
        <div>loading...</div>
      ): (
      <div>
        <div>
          <img src={image} alt={title} />
        </div>
        <div>{title}</div>
        <div>${price}</div>
        <div>{category}</div>
        <div>{description}</div>
        <div>Add to Cart</div>
      </div>
      )}
    </div>
  )
}

export default ProductDetails;