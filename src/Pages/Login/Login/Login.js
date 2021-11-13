import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useHistory} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {

    const [error, setError] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { loginWithEmail,signInUsingGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                
                history.push(redirect_uri);
            })
    }
    const handleEmailLogin = (email,password) => {
      loginWithEmail(email,password)
          .then(result => {
            console.log(result); 
              history.push(redirect_uri);
          })
  }

    const onSubmit = ({email,password}) => {

      if (password.length < 1) {
        setError('Input Your Password')
        return;
      }
      if (password.length < 6) {
        setError('At Least 6 digits')
        return;
      }
      handleEmailLogin( email, password );
    };
    return (
        <div className="container ">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-8 col-12 m-auto mb-5 ">
              <h3 className="pb-3 mt-5">Please Login</h3>

            <div className="login-main d-flex flex-column align-items-center bg-light py-5">
            <form className="" onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Input your email" className="d-block mb-3  px-5" {...register("email", { required: true })} />
              
                {errors.email && <span className="error text-danger">Email is required</span>}

                <input placeholder="Input your Password" className="d-block mb-3 px-5" type="password" {...register("password",{ required: true })} />
                {errors.password && <span className="error text-danger d-block">Password is required</span>}
                <input type="submit" className="d-inline btn btn-warning"  />
            </form>
            <div className="row mb-3 text-danger">{error}</div>
            <button onClick={handleGoogleLogin} className="btn btn-warning text-white mb-3" >Google Sign In</button>

            <Link to="/register" className="text-black"> Registere Here</Link>
            </div> 
            </div>
          </div>
        </div>
    );
};

export default Login;