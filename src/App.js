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
  Home 
} from "pages";

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
