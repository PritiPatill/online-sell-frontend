import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";

import React from "react";
import Home from "./core/Home";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home/>} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
