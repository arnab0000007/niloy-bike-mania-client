import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
  const [error, setError] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { registerWithEmail } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/home';

  const handleRegister = (email, password, name) => {
    registerWithEmail(email, password, name)
      .then(result => {
        history.push(redirect_uri);
      })
  }
  const onSubmit = ({ email, name, password }) => {

    if (password.length < 6) {
      setError('Password Must be at least 6 characters long.')
      return;
    }
 
    handleRegister(email, password, name);
  };
  return (
    <div className="container ">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-8 col-12 m-auto mb-5 ">
          <h3 className="pb-3 mt-5">Please Register Here</h3>

          <div className="login-main d-flex flex-column align-items-center bg-light py-5">
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              <input placeholder="Input your name" className="d-block mb-3  px-5" {...register("name", { required: true })} />
              {errors.name && <span className="error text-danger">Name is required</span>}
              <input placeholder="Input your email" className="d-block mb-3  px-5" {...register("email", { required: true })} />

              {errors.email && <span className="error text-danger">Email is required</span>}

              <input placeholder="Input your Password" className="d-block mb-3 px-5" type="password" {...register("password", { required: true })} />
              {errors.password && <span className="error text-danger d-block">Password is required</span>}
              <input type="submit" className="d-inline btn btn-warning" />
            </form>
            <div className="row mb-3 text-danger">{error}</div>
            <Link to="/login">Already Registered?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;