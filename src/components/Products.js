import React from "react";
import { useParams } from "react-router-dom";
import { getProductById, putProduct, deleteProduct } from "../api/queries";
import { useNavigate } from "react-router-dom";






export default function Products() {
  let { id } = useParams();

  const navigate = useNavigate();
  
  const [product, setProduct] = React.useState({})

  React.useEffect(() => {
    getProductById(id).then(res => {
      setProduct(res.data)
    })
  },[] )  




  return (
    <div className="container">
      <input type="text" value={product.name} onChange={(e) => {setProduct({...product, name: e.target.value})}} />
      <input type="number" value={product.price} onChange={(e) => {setProduct({...product, price: e.target.value})}} />
      <button onClick={() => {
        putProduct(id, product);
        navigate("/")
      }} >EDIT</button>
      <button onClick={() => {
        deleteProduct(id);
        navigate("/")
      }} >Delete</button>
    </div>
  );
}
