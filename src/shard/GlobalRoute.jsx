import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../components/Main";
import Detail from "../components/Detail";
import Login from "../components/Login";
import Signup from "../components/Singup";
import Header from "../components/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/main" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
