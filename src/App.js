import React from "react";
import { 
  Footer, 
  Home, 
  Navbar,
  Categories
} from "components";
import { 
  Route, 
  Routes 
} from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
