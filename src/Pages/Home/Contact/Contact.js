import React from 'react';
import { useForm } from 'react-hook-form';



const Register = () => {
  const { register, handleSubmit, formState: { errors },reset } = useForm();

  const onSubmit = ({ email, name, password }) => {

    alert('Successfully Sent');
    reset();

  };
  return (


    <div className="container ">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-8 col-12 m-auto mb-5 ">
          <h3 className="pb-3 mt-5">Contact Us</h3>

          <div className="login-main d-flex flex-column align-items-center bg-light py-5">
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              <input placeholder="Input your name..." className="d-block mb-3  px-5" {...register("name", { required: true })} />
              {errors.name && <span className="error text-danger">Name is required</span>}
              <input placeholder="Input your email..." className="d-block mb-3  px-5" {...register("email", { required: true })} />
              {errors.email && <span className="error text-danger">Email is required</span>}
              
        
              <input placeholder="Input Your Query..." className="d-block mb-3 px-5" type="text" {...register("query", { required: true })} />
              {errors.password && <span className="error text-danger d-block">Query is required</span>}
              <input type="submit" className="d-inline btn btn-warning" />
            </form>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;