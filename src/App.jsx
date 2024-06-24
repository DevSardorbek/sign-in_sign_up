import { useState } from "react";
import "./sass/style.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import User from "./pages/user/User";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Header from "./components/header/Header";
import "react-toastify/dist/ReactToastify.css";
import CreateProduct from "./pages/createProduct/CreateProduct";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create-product" element={<CreateProduct />} />
      </Routes>
    </>
  );
}

export default App;
