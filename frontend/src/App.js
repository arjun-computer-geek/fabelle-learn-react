import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Footer, Navbar, ProtectedRoute } from "components";

import { Route, Routes } from "react-router-dom";
import { Categories, Home, Cart, Wishlist, Login, Profile, CourseDetails} from "pages";

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/course" element={<CourseDetails />}/>
        {/* protectd Routes */}
        <Route element={<ProtectedRoute />} >
        <Route path="/profile" element={<Profile />} />
        <Route path="/wishlist" element={<Wishlist />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
