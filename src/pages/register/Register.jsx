import React, { useState } from "react";
import "../../sass/__register.scss";
import { useGetInputValue } from "../../hooks/useGetInputValue";
import axios from "../../api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  UserName: "",
  password: "",
  FirstName: "",
  LastName: "",
  phones: "",
};

const Register = () => {
  const { formData, handleChange, setFormData } =
    useGetInputValue(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const updatedFormData = { ...formData, phones: [formData.phones] };
    console.log(updatedFormData);
    axios
      .post("auth/user/sign-up", updatedFormData)
      .then((res) => {
        toast.success("Registration successful!");
        setFormData(initialState);
      })
      .catch((error) => {
        toast.error("Registration failed. Please try again.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="register__wrapper">
      <form onSubmit={handleRegister}>
        <h1>Register</h1>
        <input
          onChange={handleChange}
          value={formData.UserName}
          name="UserName"
          type="text"
          placeholder="UserName"
        />
        <input
          onChange={handleChange}
          value={formData.password}
          name="password"
          type="password"
          placeholder="password"
        />
        <input
          onChange={handleChange}
          value={formData.FirstName}
          name="FirstName"
          type="text"
          placeholder="FirstName"
        />
        <input
          onChange={handleChange}
          value={formData.LastName}
          name="LastName"
          type="text"
          placeholder="LastName"
        />
        <input
          onChange={handleChange}
          value={formData.phones}
          name="phones"
          type="number"
          placeholder="phones"
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Creating..." : "Create"}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;
