import { Card, Loader, Sidebar } from "components";
import { useProduct } from "context/productContext";
import { useEffect } from "react";
import { toast } from "react-toastify";
import "./categories.css";

export const Categories = () => {
  const {
    state: { loading, products, error },
  } = useProduct();
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main className="container">
          <Sidebar />
          <div className="main-content">
            {products.map((product, index) => (
              <Card
                key={index}
                id={product._id}
                img={`https://fabelle-learn-react.herokuapp.com/public/uploads/${product.image}`}
                productName={product.name}
                productOwner={product.owner}
                noOfReviews={product.numOfReviews}
                price={product.price}
              />
            ))}
          </div>
        </main>
      )}
    </>
  );
};
