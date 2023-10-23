  import React, { useEffect, useState } from "react";
  import { Link } from "react-router-dom";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faPlus, faMinus, faCartPlus } from '@fortawesome/free-solid-svg-icons'
  import { useDispatch, useSelector } from "react-redux";
  import { addCart, delCart } from "../redux/action/action";



  export default function Product() {

    const [productList, setProductList] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);


    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.handleCart);

    const addProduct = (product) => {
      dispatch(addCart(product))
    }


  useEffect(() => {
      fetchProductData();
    }, []);

    async function fetchProductData() {
      try {
        const response = await fetch("http://localhost:8000/api/getAlluser_product");
        const json = await response.json();
        setProductList(json);
        setFilteredProducts(json);
      } catch (error) {
        console.error("Error fetching product data: ", error);
      }
    }


    function filterProduct(category) {
      if (category === "all") {
        setFilteredProducts(productList);
      } else {
        const filtered = productList.filter(product => product.category === category);
        setFilteredProducts(filtered);
      }
    }


   const addItem = (product) => {
      dispatch(addCart(product));
    };
    const removeItem = (product) => {
      dispatch(delCart(product));
    };


    function product_detail(json) {
      let totalItems = 0;
      

      return json.map((product) => {

       const isProductInCart = cartItems.find(item => item.id === product.id);

        return (

          <div id={product.id} key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
                <div className="card text-center h-100" key={product.id}>

                  <img
                    className="card-img-top p-3"
                    src={product.image}
                    alt="Card"
                    height={300}

                  />

                    <div className="col-lg-6 col-md-6 ">
                                <div
                                  className="mb-2 bg-warning rounded-pill"
                                  style={{ maxWidth: "100px" }}
                                >
                                  <button
                                    className="btn px-3"
                                    onClick={() => {
                                      removeItem(product);
                                    }}
                                  >
                                    <FontAwesomeIcon icon={faMinus} style={{color: "#ffffff",}} />
                                  </button>
                                  

                                  <button
                                    className="btn px-3"
                                    onClick={() => {
                                      addItem(product);
                                    }}
                                  >
                                    <FontAwesomeIcon icon={faPlus} style={{color: "#ffffff",}} />
                                  </button>
                                </div>
                                </div>

                  <div className="card-body bg-warning-subtle">
                    <h3 className="card-title">
                      {product.product_name.substring(0, 12)}...
                    </h3>
                    <p className="card-text">
                      {product.product_description.substring(0, 90)}...
                    </p>
                    <h5> Price: $ {product.price}</h5>
                    <Link to={"/product/" + product.id} className="btn btn-primary m-1">
                      Buy Now
                    </Link>
                    {isProductInCart ? (
                <button className="btn btn-primary m-1" disabled>
                  Added to Cart
                </button>
              ) : (
                <button className="btn btn-primary m-1" onClick={() => addProduct(product)}>
                  Add to Cart
                </button>
              )}
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
