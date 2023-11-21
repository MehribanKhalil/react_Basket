import React, { useEffect, useState } from "react";
import Product from "../Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);
  const [loading, setLoading] = useState(true);
//   const [local,setLocal]=useState([])



  function getProducts() {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) =>{

        setProducts(data)
        setLoading(false);
    });
  }

  function handleAdd(){
    // setLocal()
    setBasket((basket)=>[...basket,products])
    console.log(basket);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>product Id</th>
            <th>product name</th>
          </tr>
        </thead>

        {loading ? (
          <p>loading</p>
        ) : 
          <tbody>
            {products &&
              products.map(({productName,price}) => (
                <tr>
                 <td>
                    <Product name={productName} price={price} />
                 </td>
                </tr>
              ))}
          </tbody>
        }
      </table>
    </div>
  );
};

export default Products;
