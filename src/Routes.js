import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";

import React from "react";
import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import PrivateRoutes from "./auth/helper/PrivateRoutes";
import AdminDashBoard from "./user/AdminDashBoard";
import AdminRoute from "./auth/helper/AdminRoutes";
import UserDashBoard from "./user/UserDashBoard";
import AddCategory from "./admin/AddCategory";
import ManageCategories from "./admin/ManageCategories";
import AddProduct from "./admin/AddProduct";
import ManageProducts from "./admin/ManageProducts";
import UpdateProduct from "./admin/UpdateProduct";
import Cart from "./core/Cart";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/user/dashboard" element={<PrivateRoutes><UserDashBoard/></PrivateRoutes>} />
        <Route path="/admin/dashboard" element={<AdminRoute><AdminDashBoard/></AdminRoute>} />
        <Route path="/admin/create/category" element={<AdminRoute><AddCategory/></AdminRoute>} />
        <Route path="/admin/categories" element={<AdminRoute><ManageCategories/></AdminRoute>} />
        <Route path="/admin/create/product" element={<AdminRoute><AddProduct/></AdminRoute>} />
        <Route path="/admin/products" element={<AdminRoute><ManageProducts/></AdminRoute>} />
        <Route path="/admin/product/update/:productId" element={<AdminRoute><UpdateProduct/></AdminRoute>} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
