import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Purchase = () => {

  const { user } = useAuth();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [service, setService] = useState({});
  const { productId } = useParams();
  useEffect(() => {
    axios.get(`https://whispering-anchorage-35214.herokuapp.com/products/${productId}`)
      .then(res => {
        setService(res.data)
      })
     
  }, [productId]);
  const onSubmit = data => {
    data.name = service.name;
    data.userId = user.uid;
    data.orderStatus = "pending";
    console.log(data);
    axios.post('https://whispering-anchorage-35214.herokuapp.com/orders', data)
      .then(res => {
        if (res.data.insertedId) {
          alert('Booked successfully');
          reset();
        }
      })
  };
  return (
    <div className="container ">
      <div className="row">
      <h1 className="py-3 fw-bold">Purchase {service.name}</h1>

        <div className="col-lg-6 col-md-6 col-sm-12 col-12 m-auto my-3">
          <p className="py-1">Details About {service.name}</p>
          <small className="text-secondary ">{service.description}</small>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 col-12 m-auto my-3 ">

          <div className="login-main d-flex flex-column bg-light p-5">
            <form className="" onSubmit={handleSubmit(onSubmit)}>

              <input defaultValue={user.email} type="email" className="d-block mb-3 w-100" {...register("email", { required: true })} />
              {errors.email && <span className="error text-danger">Email is required</span>}

              <input placeholder="Input Address " type="text" className="d-block mb-3 w-100" {...register("address", { required: true })} />
              {errors.address && <span className="error text-danger">Address is required</span>}

              <input placeholder="Input Moblie Number " type="text" className="d-block mb-3  w-100" {...register("mobile", { required: true })} />
              {errors.mobile && <span className="error text-danger">Mobile Number is required</span>}
              <br />
              <input type="submit" className="d-inline btn btn-warning" />
            </form>
    
        </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;