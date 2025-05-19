import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Admin.module.css";
import {
  deleteProductThunk,
  getProductThunk,
 
} from "../../redux/reducers/productSlice";
import FormCard from "../../companents/cards/formcard/FormCard";




const Admin = ({filterData}) => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);
  

  useEffect(() => {
    dispatch(getProductThunk());
  }, [dispatch]);

  const handleDelete = (productId) => {
    dispatch(deleteProductThunk(productId));
  };

  if (loading) return <span>LOADING..</span>
  if (error) return <span>xeta</span>

  return (
    <div className={styles.formsdiv}>
      {filterData && filterData.map(item => (
        <FormCard key={item._id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  )
}

export default Admin