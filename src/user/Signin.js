import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { authenticate, isAuthenticated, signIn } from "../auth/helper";
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

  let navigate = useNavigate();

  const handleChanges = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signIn({ email, password })
      .then((resp) => {
        if (resp.error) {
          setValues({
            ...values,
            error: resp.error,
            loading: false,
          });
        } else {
          authenticate(resp, () => {
            setValues({
              ...values,
              loading: false,
              didRedirect: true,
            });
          });
        }
      })
      .catch((err) => console.log("sign in request failed", err));
  };

  const performRedirect = () => {
    // TODO: Do the redirection here
    if (didRedirect) {
      if (user?.role === 1) {
        return <p className="text-white text-center">Redirect to admin dashboard</p>;
      } else {
        return <p className="text-white text-center">Redirect to user dashboard</p>;
      }
    }
    if (isAuthenticated()) navigate("/");
  };

  const loadingMessage = () => {
    return (
      loading && (
        <div className="col-md-6 offset-sm-3 text-left">
          <div className="alert alert-info">
            <h2>Loading...</h2>
          </div>
        </div>
      )
    );
  };

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

  const signUInForm = () => (
    <div className="row">
      <div className="col-md-6 offset-sm-3 text-left">
        <form>
          <div className="form-group">
            <label className="text-light">Email</label>
            <input
              className="form-control"
              value={email}
              onChange={handleChanges("email")}
              type="email"
            />
          </div>
          <div className="form-group">
            <label className="text-light">Password</label>
            <input
              className="form-control"
              value={password}
              onChange={handleChanges("password")}
              type="password"
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
  return (
    <Base title="Sign In Page" description="A page for user to sign in!">
      {loadingMessage()}
      {errorMessage()}
      {signUInForm()}
      {performRedirect()}
      <p className="text-white text-center">{JSON.stringify(values)}</p>
    </Base>
  );
};

export default Signin;
