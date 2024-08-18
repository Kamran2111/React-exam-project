import React from "react";

import HomePage from "./components/pages/HomePage";
import SignInPage from "./components/pages/SignInPage";
import SignUpPage from "./components/pages/SignUpPage";
import { Route, Routes } from "react-router-dom";

import CreateBudgetSection from "./components/layout/CreateBudgetSection";
import NotFoundPage from "./components/pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/budgetHistory" element={<CreateBudgetSection />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
