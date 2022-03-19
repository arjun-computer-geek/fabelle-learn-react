import React from "react";
import "./home.css";
import { categories } from "data/category-data";
import { 
    Card, 
    CardCategory 
} from "components";
export const Home = () => {
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
          <Card
            img={"./images/homepage/webdev.png"}
            productName={"The complete 2022 Fullstack Web Developer Course"}
            productOwner={"Arjun"}
            noOfRatings={4352}
            price={199}
          />
          <Card
            img={"./images/homepage/webdev.png"}
            productName={"The complete 2022 Fullstack Web Developer Course"}
            productOwner={"Arjun"}
            noOfRatings={4352}
            price={199}
          />
          <Card
            img={"./images/homepage/webdev.png"}
            productName={"The complete 2022 Fullstack Web Developer Course"}
            productOwner={"Arjun"}
            noOfRatings={4352}
            price={199}
          />
          <Card
            img={"./images/homepage/webdev.png"}
            productName={"The complete 2022 Fullstack Web Developer Course"}
            productOwner={"Arjun"}
            noOfRatings={4352}
            price={199}
          />
          <Card
            img={"./images/homepage/webdev.png"}
            productName={"The complete 2022 Fullstack Web Developer Course"}
            productOwner={"Arjun"}
            noOfRatings={4352}
            price={199}
          />
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
