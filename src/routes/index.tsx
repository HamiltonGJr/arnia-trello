import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import ToDoList from "../pages/ToDoList";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/todolist" element={<ToDoList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
