import { Card, Sidebar } from "components";
import { useProduct } from "context/productContext";
import { useEffect } from "react";
import { toast } from "react-toastify";
import "./categories.css";

export const Categories = () => {
  const { state:{loading, products}} = useProduct();
  return (
    <>
      <main className="container">
        <Sidebar />
        <div className="main-content">
          {products.map((product, index) => (
            <Card
              key={index}
              id={product._id}
              img={`http://localhost:8000/public/uploads/${product.image}`}
              productName={product.name}
              productOwner={product.owner}
              noOfReviews={product.numOfReviews}
              price={product.price}
            />
          ))}
        </div>
      </main>
    </>
  );
};
