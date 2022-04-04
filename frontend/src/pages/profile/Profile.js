import { useUser } from "context/userContext";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Profile = () => {
    const navigate = useNavigate()
  const {
    state: { user},
    logOut
  } = useUser();

  const logOutHander = () => {
      logOut()
      toast.success("Logout Success")
      navigate('/')
  }
  return (
    <main className="wishlist-page">
      <h2>Hi!,{user.name}</h2>
      <p style={{margin: "2rem"}}>Email: {user.email}</p>
      <button className="btn" onClick={logOutHander}>LogOut</button>
    </main>
  );
};
