import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../Redux/Actions/productActions";
import ProductComponent from "./productComponent";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
      console.log("Error",err);
    });
    dispatch(setProducts(response.data));
  }
  console.log("products:", products);
  useEffect(() => {
    fetchProducts();
  },[]);
  return (
    <div>
      <ProductComponent />
    </div>
  )
}

export default ProductListing;