import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { signin, authenticate, isAuthenticated } from "../auth/helper";
import Base from "../core/Base";

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false,
  });

  const { email, password, error, loading, didRedirect } = values;
  const { user } = isAuthenticated();
  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    console.log(email);
    console.log(password);
    signin({ email, password })
      .then((data) => {
        console.log(data);
        if (data.message) {
          setValues({
            ...values,
            error: data.message,
            loading: false,
            didRedirect: false,
          });
        } else {
          authenticate(data, () => {
            setValues({ ...values, didRedirect: true });
          });
        }
      })
      // .catch(console.log("Signin Failed"));
  };

  const performRedirect = () => {
    if (didRedirect) {
      if (user && user.role === 1) {
        return <Redirect to="/admin/dashboard" />;
      } else {
        return <Redirect to="/user/dashboard" />;
      }
    }
    // if (isAuthenticated()) {
    //   return <Redirect to="/"></Redirect>;
    // }
  };
  const loadingMessage = () => {
    return (
      loading && (
        <div className="alert alert-info">
          <h1>Loading</h1>
        </div>
      )
    );
  };
  const errorMessage = () => {
    return (
      <div
        className="alert alert-danger"
        style={{ display: error ? "" : "none" }}
      >
        {error}
      </div>
    );
  };
  const signInForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label className="text-light">Email</label>
              <input
                value={email}
                onChange={handleChange("email")}
                className="form-control"
                type="email"
              />
            </div>
            <div className="form-group">
              <label className="text-light">Password</label>
              <input
                value={password}
                onChange={handleChange("password")}
                className="form-control"
                type="password"
              />
            </div>
            <button onClick={onSubmit} className="btn btn-success btn-block ">
              SUBMIT
            </button>
            <div>{JSON.stringify(values)}</div>
          </form>
        </div>
      </div>
    );
  };
  return (
    <Base title="Signin Page" description="A Page for user to signin">
      {errorMessage()}
      {loadingMessage()}
      {signInForm()}
      {performRedirect()}
    </Base>
  );
};

export default Signin;
