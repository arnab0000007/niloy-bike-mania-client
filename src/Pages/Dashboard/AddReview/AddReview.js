import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import ReactStars from "react-rating-stars-component";
const AddReview = () => {
  const [rating,setRating] = useState(1);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { user } = useAuth();
  
  const onSubmit = data=> {
    data.rating = rating.toString();
    axios.post('https://whispering-anchorage-35214.herokuapp.com/reviews', data)
      .then(res => {
        if (res.data.insertedId) {
          alert('added successfully');
          reset();
        }
      })
  };
  const set = (rating)=>{
    setRating(rating);
  }

  return (
    <div className="container ">
      {<div className="row">
        <div className="col-lg-6 col-md-6 col-sm-8 col-12 m-auto mb-5 ">
          <h3 className="pb-3 mt-5">Add Review</h3>
          <div className="login-main d-flex flex-column bg-light p-5">
            <form className="" onSubmit={handleSubmit(onSubmit)}>

              <input defaultValue={user.displayName} className="d-block mb-3 w-100" {...register("name")} />
              <input defaultValue={user.email} type="email" className="d-block mb-3 w-100" {...register("email")} />
              <textarea {...register("review", { required: true })} className="d-block mb-3  w-100" placeholder="Review Here" />

              {errors.review && <span className="error text-danger">Review is required</span>}
              {/* 
              <input placeholder="rating" className="d-block mb-3 w-100" type="number" {...register("rating", { required: true })} />
              {errors.rating && <span className="error text-danger d-block">Rating is Required</span>} */}

              <div className="d-flex align-items-center justify-content-center pb-3">
                <ReactStars
                  size={50}
                  count={5}
                  value = {rating}
                  a11y={true}
                  activeColor="#ffd700"
                  onChange ={ newValue => {
                    set(newValue)
                  }}
                  isHalf={true}
                  edit={true}
                  //{...register("rating")}
                />
              </div>

              <input type="submit" className="d-inline btn btn-warning" />
            </form>

            <Link to="/" className="mt-3">Go To Home Page</Link>
          </div>
        </div>
      </div>}
    </div>
  );
};

export default AddReview;