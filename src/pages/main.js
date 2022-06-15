import React, { useState } from "react";
import { getProducts } from '../api/queries';
import { Link } from "react-router-dom";

export default function Main() {
    const [items, setItems] = useState([])
    React.useEffect(() => {
        getProducts().then((res) => {
          setItems(res.data);
        })
      }, [])
    return (
      <div>
        <ul>
          {items.map((el) => {
            return(
              <div className="container">
          <Link to={`/products/${el.id}`}>{el.name} : </Link>
          <p className="price">{el.price}</p>
          </div>
            )
          })}
          </ul>
      </div>
    );
  }