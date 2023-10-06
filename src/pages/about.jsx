import React from 'react'
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className=" lead text-center">
          Welcome to Shopping Online, your ultimate destination for a seamless and delightful online shopping 
          experience. At Shopping Online, we believe in redefining the way you shop by offering an extensive range of 
          high-quality products curated from around the world, all at your fingertips. Our passion for providing exceptional
          ustomer service, coupled with our commitment to offering the latest trends and timeless classics, sets us apart in
          the competitive world of online retail. With a focus on convenience, reliability, and affordability, we strive to 
          make every purchase an enjoyable journey. Whether you're looking for fashion-forward apparel, cutting-edge 
          electronics, or stylish home decor, you can trust Shopping Online to deliver unparalleled variety and unparalleled 
          quality. Join us in this exciting shopping adventure, where your satisfaction is our top priority. Happy shopping!
        </p>
         

         <div className="row text-center py-4">
        <h2>Our Products</h2>
        <p className="lead">Our store offers a wide range of products to cater to your needs. Explore our categories below: </p>
        </div>

        <div className="row text-center">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://media.istockphoto.com/id/626085868/photo/mens-accessories.jpg?s=612x612&w=0&k=20&c=M4QqVxeUyMeChfMqOucfxtVaVMZ51g00-2tlc_Vgrx0=" alt="" height={160} />
              <div className="card-body">
                <Link to="/products" className="card-title text-center btn btn-outline-dark">Mens's Clothing</Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://media.istockphoto.com/id/1208148708/photo/polka-dot-summer-brown-dress-suede-wedge-sandals-eco-straw-tote-bag-cosmetics-on-a-light.jpg?s=612x612&w=0&k=20&c=9Y135GYKHLlPotGIfynBbMPhXNbYeuDuFzreL_nfDE8=" alt="" height={160} />
              <div className="card-body">
                 <Link to="/products" className="card-title text-center btn btn-outline-dark">Women's Clothing</Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <Link to="/products" className="card-title text-center btn btn-outline-dark">Jewelery</Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <Link to="/products" className="card-title text-center btn btn-outline-dark">Electronics</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage