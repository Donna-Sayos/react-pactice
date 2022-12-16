import React from "react";
import { useNavigate } from "react-router-dom";
import IMG from "../assets/404-error.gif";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="error">
      <button onClick={() => navigate("/products/list")}>back</button>
      <img src={IMG} alt="error img" />
    </div>
  )
};
