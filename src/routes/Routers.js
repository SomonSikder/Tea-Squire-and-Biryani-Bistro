import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Contacts from "../pages/Contacts";
import Cart from "../pages/Cart";
import AllFoods from "../pages/AllFoods";
import FoodDetails from "../pages/FoodDetails";
import CheckOut from "../pages/CheckOut";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/foods" element={<AllFoods />} />
      <Route path="/food/:id" element={<FoodDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkOut" element={<CheckOut />} />
      <Route path="/contact" element={<Contacts />} />
    </Routes>
  );
};

export default Routers;
