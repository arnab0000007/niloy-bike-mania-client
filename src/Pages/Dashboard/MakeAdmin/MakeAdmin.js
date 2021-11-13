import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const onSubmit = (email) => {
    axios.put('https://whispering-anchorage-35214.herokuapp.com/admin', email)
      .then(res => {
        if (res.data.insertedId || res.data.modifiedCount) {
          alert('Admin Set Successfull');
          reset();
        }
        else if (res.data.Message) {
          alert(res.data.Message);
        }
        else {
          alert('Already an Admin');
          reset();
        }
      })

  };
  return (
    <div className="container ">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-8 col-12 m-auto mb-5 ">
          <h3 className="pb-3 mt-5">Make Admin</h3>

          <div className="login-main d-flex flex-column align-items-center bg-light py-5">
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              <input placeholder="Input email" className="d-block mb-3  px-5" {...register("email", { required: true })} />
              {errors.email && <span className="error text-danger">Email is required</span>}
              <input type="submit" className="d-inline btn btn-warning" />
            </form>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;