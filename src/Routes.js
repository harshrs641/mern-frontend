import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import AdminRoute from "./auth/helper/AdminRoutes";
import PrivateRoute from "./auth/helper/PrivateRoutes";
import UserDashboard from "./user/UserDashBoard";
import AdminDashboard from "./user/AdminDashBoard";
import AddCategory from "./admin/AddCategory";
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/signup" component={Signup}></Route>
        <Route exact path="/signin" component={Signin}></Route>
        <PrivateRoute
          exact
          path="/user/dashboard"
          component={UserDashboard}
        ></PrivateRoute>
        <AdminRoute
          exact
          path="/admin/dashboard"
          component={AdminDashboard}
        ></AdminRoute>
        <AdminRoute
          exact
          path="/admin/create/category"
          component={AddCategory}
        ></AdminRoute>
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
