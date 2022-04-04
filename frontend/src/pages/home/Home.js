import React from "react";
import "./home.css";
import { categories } from "data/category-data";
import { Card, CardCategory } from "components";
import { useProduct } from "context/productContext";
import { Link } from "react-router-dom";
export const Home = () => {
  const {
    state: { loading, products },
  } = useProduct();
  console.log(loading);
  console.log(products);
  return (
    <main>
      <section className="landing-page">
        <div className="content">
          <h1>Learning that gets you</h1>
          <p>Skills for your present (and your future). Get started with us.</p>
        </div>
        <div className="represent-img">
          <img
            loading="lazy"
            src="./images/homepage/home.svg"
            alt="landing-img"
          />
        </div>
      </section>

      <section className="popular-courses">
        <h2>Popular Courses</h2>
        <div className="courses-container">
          {products.slice(0, 10).map((product, index) => (
            <React.Fragment key={index}>
              <Link to="/categories">
              <Card
                id={product._id}
                img={`https://fabelle-learn-react.herokuapp.com/public/uploads/${product.image}`}
                productName={product.name}
                productOwner={product.owner}
                noOfReviews={product.numOfReviews}
                price={product.price}
              />
              </Link>
            </React.Fragment>
          ))}
        </div>
      </section>

      <section className="top-categories">
        <h2>Top Categories</h2>
        <div className="categories-container">
          {categories.map((item, i) => (
            <CardCategory key={i} img={item.img} category={item.category} />
          ))}
        </div>
      </section>
    </main>
  );
};
