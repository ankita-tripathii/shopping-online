import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";



export default function Product() {

  const [productList, setProductList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);


useEffect(() => {
    fetchProductData();
  }, []);


  function fetchProductData() {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setProductList(json);
        setFilteredProducts(json);
      });
  }

  function filterProduct(category) {
    if (category === "all") {
      setFilteredProducts(productList);
    } else {
      const filtered = productList.filter(product => product.category === category);
      setFilteredProducts(filtered);
    }
  }


  function product_detail(json) {
    return json.map((product) => {

      return (

        <div id={product.id} key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
              <div className="card text-center h-100" key={product.id}>

                <img
                  className="card-img-top p-3"
                  src={product.image}
                  alt="Card"
                  height={300}
                  
                />
                <div className="card-body bg-warning-subtle">
                  <h3 className="card-title">
                    {product.title.substring(0, 12)}...
                  </h3>
                  <p className="card-text">
                    {product.description.substring(0, 90)}...
                  </p>
                  <h5> Price: $ {product.price}</h5>
                  <Link to={"/product/" + product.id} className="btn btn-primary m-1">
                    Buy Now
                  </Link>
                  <button className="btn btn-primary m-1">
                    Add to Cart
                  </button>
                </div>

              </div>
            </div>
      );
    });
  }


  return(
       
       <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center fw-bold">Latest Products</h2>
            <hr />
          </div>
          <div className="buttons text-center py-5">
             <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("all")}>All</button>
             <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
             <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
             <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("jewelery")}>Jewelry</button>
             <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("electronics")}>Electronics</button>
          </div>
        </div>
        <div className="row justify-content-center">
           {product_detail(filteredProducts)}
        </div>
      </div>

        
    )

}
