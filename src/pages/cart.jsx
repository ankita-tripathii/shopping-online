import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action/action";



const Cart = () => {

	const state = useSelector((state) => state.handleCart);
    const dispatch = useDispatch();

const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5">Your Cart is Empty</h4>
            <FontAwesomeIcon className="p-3 width" icon={faCartPlus} style={{color: "#f7e5b1", height:"220px"}}/>
            <br/><span></span>
            <Link to="/" className="btn  btn-primary mx-4">Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  };


  const addItem = (product) => {
    dispatch(addCart(product));
  };
  const removeItem = (product) => {
    dispatch(delCart(product));
  };


  const ShowCart = () => {

  	let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;
    state.map((product) => {
      return (subtotal += product.price * product.qty);
    });

    state.map((product) => {
      return (totalItems += product.qty);
    });
    return (
      <>
        <section className="h-100 gradient-custom">
          <div className="container">
            <div className="row d-flex justify-content-center my-4">
              <div className="col-md-8">
                <div className="card mb-4">
                  <div className="card-header py-3 bg-secondary-subtle">
                    <h5 className="mb-0">Item List</h5>
                  </div>
                  <div className="card-body ">
                    {state.map((product) => {
                      return (
                        <div key={product.id}>
                          <div className="row d-flex align-items-center">
                            <div className="col-lg-3 col-md-12">
                              <div
                                className="bg-image rounded"
                                data-mdb-ripple-color="light"
                              >
                              <Link to={"/product/" + product.id} type="button">
                              <img
                                  src={product.image}
                                  // className="w-100"
                                  alt={product.title}
                                  width={100}
                                  height={75}
                                />
                               </Link>
                                
                              </div>
                            </div>

                            <div className="col-lg-5 col-md-6">
                              <p>
                                <strong>{product.title}</strong>
                              </p>
                              {/* <p>Color: blue</p>
                              <p>Size: M</p> */}
                            </div>

                            <div className="col-lg-4 col-md-6 ">
                              <div
                                className="d-flex mb-4 bg-warning rounded-pill"
                                style={{ maxWidth: "200px" }}
                              >
                                <button
                                  className="btn px-3"
                                  onClick={() => {
                                    removeItem(product);
                                  }}
                                >
                                  <FontAwesomeIcon icon={faMinus} style={{color: "#ffffff",}} />
                                </button>

                                <p className="mx-5">{product.qty}</p>

                                <button
                                  className="btn px-3"
                                  onClick={() => {
                                    addItem(product);
                                  }}
                                >
                                  <FontAwesomeIcon icon={faPlus} style={{color: "#ffffff",}} />
                                </button>
                              </div>

                              <p className="text-start text-md-center">
                                <strong>
                                  <span className="text-muted">{product.qty}</span>{" "}
                                  x ${product.price}
                                </strong>
                              </p>
                            </div>
                          </div>

                          <hr className="my-4" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-header py-3 bg-secondary-subtle">
                    <h5 className="mb-0">Order Summary</h5>
                  </div>
                  <div className="card-body ">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Products ({totalItems})<span>${Math.round(subtotal)}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                        Shipping
                        <span>${shipping}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Total amount</strong>
                        </div>
                        <span>
                          <strong>${Math.round(subtotal + shipping)}</strong>
                        </span>
                      </li>
                    </ul>

                    <Link
                      to="/checkout"
                      className="btn btn-primary btn-lg btn-block">Go to checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

   return (
    <>
      <Navbar />
      <div className="container">
         {state.length > 0 ? <ShowCart /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );

};

export default Cart