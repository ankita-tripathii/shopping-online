import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../redux/action/action";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'



const ProductDetail = () => {

  const { id } = useParams();
  const [product, setProduct]  = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);

  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.handleCart);

  const addProduct = (product) => {
    dispatch(addCart(product));
  };


  useEffect(() => {
    fetchProductData();
  }, [id]);

  async function fetchProductData() {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const json = await response.json();
      setProduct(json);

      const response2 = await fetch(`https://fakestoreapi.com/products/category/${json.category}`);
      const json2 = await response2.json();
      setSimilarProducts(json2);
    } 
    catch (error) {
      console.error("Error fetching product data: ", error);
    }
  }

  const ShowProduct = () => {
  const isProductInCart = cartItems.find(item => item.id === product.id);
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 py-3">
              <img
                className="img-fluid"
                src={product.image}
                alt={product.title}
                width="350px"
                height="350px"
              />
            </div>
            <div className="col-md-6 col-md-6 py-3">
              <h4 className="text-uppercase text-muted">{product.category}</h4>
              <h1 className="display-7">{product.title}</h1>
              <p className="lead">Rating: {product.rating && product.rating.rate}{" "}
               <FontAwesomeIcon icon={faStar} style={{color: "#ffd43b",}} />
              </p>
              <h3 className="display-6  my-3">Price: ${product.price}</h3>
              <p className="lead">{product.description}</p>
              {isProductInCart ? (
              <button className="btn btn-primary m-1" disabled>
                Added to Cart
              </button>
            ) : (
              <button className="btn btn-primary m-1" onClick={() => addProduct(product)}>
                Add to Cart
              </button>
            )}
              <Link to="/cart" className="btn btn-primary mx-3">
                Go to Cart
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  const ShowSimilarProduct = () => {
  	
    return (
      <>
        <div className="py-4 my-4">
          <div className="d-flex">
            {similarProducts.map((product) => {
             const isProductInCart = cartItems.find(item => item.id === product.id);
              return (
                <div key={product.id} className="card mx-2 text-center">
                  <img
                    className="card-img-top p-3"
                    src={product.image}
                    alt="Card"
                    height={300}
                    width={300}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {product.title.substring(0, 15)}...
                    </h5>
                  </div>
                  {/* <ul className="list-group list-group-flush">
                    <li className="list-group-item lead">${product.price}</li>
                  </ul> */}
                  <div className="card-body">
                    <Link
                      to={"/product/" + product.id}
                      className="btn btn-primary m-1"
                    >
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
              );
            })}
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">{<ShowProduct />}</div>
        <div className="row">
          <div className="d-none d-md-block">
          <h2 className="">You may also Like</h2>
            <Marquee
              pauseOnHover={true}
              pauseOnClick={true}
              speed={50}
              direction="left"
              width="200"
              height="200"
            >
              {<ShowSimilarProduct />}
            </Marquee>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );

};

export default ProductDetail;