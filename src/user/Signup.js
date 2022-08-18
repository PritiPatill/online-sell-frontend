import React, { useState } from "react";
import { Link } from 'react-router-dom'

import { signUp } from "../auth/helper";
import Base from "../core/Base";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { name, email, password, error, success } = values;

  const handleChanges = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signUp({ name, email, password })
      .then((data) => {
        if (data?.error) {
          setValues({ ...values, error: data.error });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true,
          });
        }
      })
      .catch((err) => console.log("Error in signup", err));
  };

  const signUpForm = () => (
    <div className="row">
      <div className="col-md-6 offset-sm-3 text-left">
        <form>
          <div className="form-group">
            <label className="text-light">Name</label>
            <input
              className="form-control"
              type="text"
              onChange={handleChanges("name")}
              value={name}
            />
          </div>
          <div className="form-group">
            <label className="text-light">Email</label>
            <input
              className="form-control"
              type="email"
              onChange={handleChanges("email")}
              value={email}
            />
          </div>
          <div className="form-group">
            <label className="text-light">Password</label>
            <input
              className="form-control"
              type="password"
              onChange={handleChanges("password")}
              value={password}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button onClick={onSubmit} className="btn btn-success">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  const successMessage = () => (
    <div className="col-md-6 offset-sm-3 text-left">
      <div
        className="alert alert-success"
        style={{ display: success ? "" : "none" }}
      >
        New Account is created successfully. Please{" "}
        <Link to="/signin">Login Here</Link>
      </div>
    </div>
  );

  const errorMessage = () => (
    <div className="col-md-6 offset-sm-3 text-left">
      <div
        className="alert alert-danger"
        style={{ display: error ? "" : "none" }}
      >
        {error}
      </div>
    </div>
  );

  return (
    <Base title="Sign Up Page" description="A page for user to sign up!">
      {successMessage()}
      {errorMessage()}
      {signUpForm()}
    </Base>
  );
};

export default Signup;
