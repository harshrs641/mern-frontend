import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import Base from "../core/Base";
import { createCategory } from "./helper/adminapicall";

const AddCategory = () => {
  const [name, setname] = useState("");
  const [error, seterror] = useState(false);
  const [success, setsuccess] = useState(false);

  const { user, token } = isAuthenticated();

  const backButton = () => {
    return (
      <div className="mt-4">
        <Link
          className="btn.btn-sm btn-success p-2 rounded"
          to="/admin/dashboard"
        >
          Admin Home
        </Link>
      </div>
    );
  };
  const handleChange = (event) => {
    seterror("");
    setname(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    seterror("");
    setsuccess(false);
    createCategory(token, { name })
      .then((data) => {
          console.log(data);
        if (data.message) seterror(data.message);
        else {
          setsuccess("Save"+data.category.name);
          setname("");
          seterror("");
        }
      })
      .catch((err) => seterror(err));
  };

  const successMessage = () => {
    return { success } && <h4 className= "text-success"> {success}</h4>;
  };
  const errorMessage = () => {
    return { error } && <h4 className= "text-danger"> {error}</h4>;
  };
  const categoryForm = () => {
    return (
      <form>
        <div className="form-group">
          <p className="lead">Enter the category</p>
          <input
            type="text"
            className="text form-control my-3"
            onChange={handleChange}
            value={name}
            autoFocus
            required
            placeholder="For Ex. Summer"
          />
          <button onClick={onSubmit} className="btn btn-outline-info rounded">
            Create Category
          </button>
        </div>
      </form>
    );
  };

  return (
    <Base
      title="Create a category"
      description="Add a new category "
      className="container bg-info p-4"
    >
      <div className="row bg-white rounded">
        <div className="col-md-4 offset-md-2">
          {successMessage()}
          {errorMessage()}
          {categoryForm()} {backButton()}

          {name}
          {error}
          {success}

        </div>
      </div>
    </Base>
  );
};
export default AddCategory;
