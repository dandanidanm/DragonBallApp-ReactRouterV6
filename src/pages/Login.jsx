import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { authTypes } from "../types/authTypes";

const Login = () => {

  const {dispatch} = useContext(AuthContext)

  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch({type: authTypes.login})
    navigate("/men");
  };
  return (
    <div className="container text-center mt-5">
      <img src="/assets/animate.gif" alt="goku-animacion" />
      <h1 className="my-3">Login Screen</h1>
      <button onClick={handleLogin} className="btn btn-primary">
        Login
      </button>
    </div>
  );
};

export default Login;
