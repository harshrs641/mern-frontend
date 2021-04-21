import React from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import Base from "../core/Base";

const AdminDashboard = () => {
  const {
    user: { name, email, role },
  } = isAuthenticated();

  const adminLeftSide = () => {
    return (
      <div className="card">
        <h4 className="card-header bg-dark text-white">Admin Navigation</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/admin/create/category" className="nav-link text-success">
              Create Categories
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/create/product" className="nav-link text-success">
              Create Product
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/products" className="nav-link text-success">
              Manage Products
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/orders" className="nav-link text-success">
              Manage Orders
            </Link>
          </li>
        </ul>
      </div>
    );
  };
  const adminRightSide = () => {
    return (
      <div className="card mb-4">
        <h4 className="card-header">Information</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <h6>
              <span className="badge badge-success k mr-2">Name:</span>
              {name}
            </h6>
          </li>
          <li className="list-group-item">
            <h6>
              <span class="badge badge-success mr-2">Email</span>
              {email}
            </h6>
          </li>
          <li className="list-group-item">
            <h6>
              <span class="badge badge-danger mr-2">Admin</span>
            </h6>
          </li>
        </ul>
      </div>
    );
  };
  return (
    <Base
      title="Welcome Admin"
      description="Manage Resources"
      className="container bg-success p-4"
    >
      <div className="row">
        <div className="col-3"> {adminLeftSide()}</div>
        <div className="col-9"> {adminRightSide()}</div>
      </div>
    </Base>
  );
};

export default AdminDashboard;
