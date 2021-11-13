import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';


const AddService = () => {
  
  const { register, handleSubmit, formState: { errors },reset } = useForm();
  const {special,setSpecial} = useProducts();
  const onSubmit = data => {
    axios.post('http://localhost:5000/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                    setSpecial(!special);
                }
             })
  };

  return (
    <div className="container ">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-8 col-12 m-auto mb-5 ">
          <h3 className="pb-3 mt-5">Add Product</h3>
          <div className="login-main d-flex flex-column bg-light p-5">
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              
              <input placeholder="Input product Name" className="d-block mb-3 w-100" {...register("name", { required: true })} />
              {errors.name && <span className="error text-danger">Name is required</span>}

              <textarea {...register("description", { required: true })} className="d-block mb-3  w-100" placeholder="Description Here" />
              {errors.description && <span className="error text-danger">Description is required</span>}

              <input placeholder="Input product Price" className="d-block mb-3 w-100" type="number" {...register("price", { required: true })} />
              {errors.price && <span className="error text-danger d-block">price is required</span>}
             
              <input placeholder="Input Image Link Here" className="d-block mb-3  w-100" {...register("img", { required: true })} />
              {errors.img && <span className="error text-danger">Image Link is required</span>}

              <input type="submit" className="d-inline btn btn-warning" />
            </form>
           
            <Link to="/explore" className="mt-3">See Alll Products</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;