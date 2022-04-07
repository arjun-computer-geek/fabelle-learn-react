import { Card, Loader, Sidebar } from "components";
import { useProduct } from "context/productContext";
import { useEffect } from "react";
import { toast } from "react-toastify";
import "./categories.css";

export const Categories = () => {
  const {
    state: { loading, products, error },
    filterState:{byRatings}
  } = useProduct();

  const transformProducts = () => {
    let sortedProducts = products;
    if(byRatings) return sortedProducts = sortedProducts.filter(product => product.ratings >= byRatings)
    return sortedProducts;
  }
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
            {transformProducts().map((product, index) => (
              <Card
                key={index}
                id={product._id}
                img={`https://fabelle-learn-react.herokuapp.com/public/uploads/${product.image}`}
                productName={product.name}
                productOwner={product.owner}
                noOfReviews={product.numOfReviews}
                ratings={product.ratings}
                price={product.price}
              />
            ))}
          </div>
        </main>
      )}
    </>
  );
};
