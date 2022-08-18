import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";

import React from "react";
import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
