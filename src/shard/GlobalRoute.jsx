import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../components/Main";
import Detail from "../components/Detail";
import Login from "../components/Login";
import Singup from "../components/Singup";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/member/login" element={<Login />} />
        <Route path="/member/signup" element={<Singup />} />
        <Route path="/main" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

