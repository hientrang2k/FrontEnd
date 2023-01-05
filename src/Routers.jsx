import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminLogin, ListAccount, AdminListDoctor } from "./pages/admin";
import { UserLogin, HomePage } from "./pages/user";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/list-account" element={<ListAccount />} />
        <Route path="/admin/list-doctor" element={<AdminListDoctor />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
