import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import Base from "../core/Base";
import { createCategory } from "./helper/adminapicall";

const AddCategory = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { user, token } = isAuthenticated();

  const handleOnchange = (event) => {
    setError("");
    setName(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setError("");
    setSuccess(false);

    createCategory(user._id, token, { name }).then((data) => {
      if (data?.error) {
        setError(true);
      } else {
        setError("");
        setSuccess(true);
        setName("");
      }
    });
  };

  const successMessage = () => {
    if (success) {
      return <h4 className="text-success mt-3">Category Created Successfully</h4>;
    }
  };

  const warningsMessage = () => {
    if (error) {
      return <h4 className="text-danger">Failed to create category</h4>;
    }
  };

  const categoryForm = () => {
    return (
      <form>
        <div className="form-group my-3">
          <p className="lead"> Enter the category</p>
          <input
            type="text"
            className="form-control my-3"
            value={name}
            onChange={handleOnchange}
            autoFocus
            required
            placeholder="For Ex. Summer"
          />
          <button className="btn btn-outline-info" onClick={onSubmit}>
            Create Category
          </button>
        </div>
      </form>
    );
  };

  const goBack = () => (
    <div>
      <Link className="btn btn-sm btn-success mb-3" to="/admin/dashboard">
        Back
      </Link>
    </div>
  );

  return (
    <Base
      title="Create a category here"
      description="Add a new category for new tshirts"
      className="container bg-info p-4"
    >
      <div className="row bg-white rounded">
        <div className="col-md-8 offset-md-2">
          {successMessage()}
          {warningsMessage()}
          {categoryForm()} {goBack()}
        </div>
      </div>
    </Base>
  );
};

export default AddCategory;
