import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import Base from "../core/Base";
import { getCategoryById, updateCategory } from "./helper/adminapicall";

const UpdateCategory = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { user, token } = isAuthenticated();

  const {categoryId} = useParams()
    const navigate = useNavigate()

  const handleOnchange = (event) => {
    setError("");
    setName(event.target.value);
  };

  const preloadCategory = () => {
    getCategoryById(categoryId).then(data => {
        if(data?.error) setError(data?.error)
        else setName(data?.name)
    })
  }

  useEffect(() => {
    preloadCategory()
  }, [])
  

  const onSubmit = (event) => {
    event.preventDefault();
    setError("");
    setSuccess(false);

    updateCategory(user._id,categoryId, token, { name }).then((data) => {
      if (data?.error) {
        setError(true);
      } else {
        setError("");
        setSuccess(true);
        setName("");
        setTimeout(() => {
            navigate("/admin/categories")
        }, 2000);
      }
    });
  };

  const successMessage = () => {
    if (success) {
      return <h4 className="text-success mt-3">Category updated Successfully</h4>;
    }
  };

  const warningsMessage = () => {
    if (error) {
      return <h4 className="text-danger">Failed to update category</h4>;
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
            Update Category
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
      title="Update category"
      description="Update a category here"
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

export default UpdateCategory;
