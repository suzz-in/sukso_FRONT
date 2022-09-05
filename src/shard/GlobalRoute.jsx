import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../page/LoginPage"
import MainPage from "../page/MainPage";
import SingupPage from "../page/SignupPage";
import DetailPage from "../page/Detailpage"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SingupPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

