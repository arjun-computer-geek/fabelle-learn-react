import { Card, Loader, Sidebar } from "components";
import { useProduct } from "context/productContext";
import { useEffect } from "react";
import { toast } from "react-toastify";
import "./categories.css";

export const Categories = () => {
  const {
    state: { loading, products, error },
    filterState: { byRatings, sort, sortPrice, searchQuery },
  } = useProduct();

  const transformProducts = () => {
    let sortedProducts = products;

    if (byRatings) {
      sortedProducts = sortedProducts.filter(
        (product) => product.ratings >= byRatings
      );
    }
    if (sort === "high-rated") {
      sortedProducts = sortedProducts.sort((a, b) => b.ratings - a.ratings);
    }

    if (sort === "most-popular") {
      sortedProducts = sortedProducts.sort(
        (a, b) => b.numOfReviews - a.numOfReviews
      );
    }
    if (sort === "newest") {
      sortedProducts = sortedProducts.sort((a, b) =>
        a.createdAt > b.createdAt ? 1 : -1
      );
    }
    if (sortPrice === "free") {
      sortedProducts = sortedProducts.filter((product) => product.price === 0);
    }
    if (sortPrice === "paid") {
      sortedProducts = sortedProducts.filter((product) => product.price > 0);
    }
    if (searchQuery){
      sortedProducts = sortedProducts.filter(product => product.name.toLowerCase().includes(searchQuery))
    }
    return sortedProducts;
  };
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
