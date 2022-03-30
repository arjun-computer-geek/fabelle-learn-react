import React from "react";
import { 
  Footer, 
  Navbar
} from "components";

import { 
  Route, 
  Routes 
} from "react-router-dom";
import { 
  Categories, 
  Home ,
  Cart
} from "pages";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<Cart />}/>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
