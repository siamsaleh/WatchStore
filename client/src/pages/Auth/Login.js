import React, { useState } from "react";
import { Layout } from "../../componenets/layout/Layout";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import "../../styles/AuthStyle.css";
import { useAuth } from "../../context/auth";
import { toast } from "react-hot-toast";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const location = useLocation();

  const navigate = useNavigate();

  //form function e=event
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/login`,
        { email, password }
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth, //previous data
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/"); // if location available location.state otherwise home page
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.success("Something went wrong");
    }
  };

  return (
    <Layout title={"Login - Watch Store"}>
      <div className="register-bg">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h4 className="title">Login Form</h4>
            <div className="mb-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                id="exampleInputEmail"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                id="exampleInputPassword"
                placeholder="password"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
