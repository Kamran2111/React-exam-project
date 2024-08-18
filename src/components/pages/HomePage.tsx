import React from "react";
import { useNavigate } from "react-router-dom";
import OfficeBudget from "../layout/OfficeBudget";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center ">
      <OfficeBudget />
    </div>
  );
};

export default HomePage;
