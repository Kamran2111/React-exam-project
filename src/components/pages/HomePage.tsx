import React from "react";
import { useNavigate } from "react-router-dom";
import OfficeBudget from "../layout/OfficeBudget";

const HomePage = () => {
  // const navigate = useNavigate();
  // const handleOpenSignUpPage = () => {
  //   navigate("/signup", {
  //     replace: true,
  //   });
  // };
  return (
    <div>
      <OfficeBudget />
    </div>
  );
};

export default HomePage;
