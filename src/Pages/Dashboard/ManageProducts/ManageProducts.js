import axios from 'axios';
import React from 'react';
import useProducts from '../../../hooks/useProducts';
const ManageProducts = () => {
 
  const { products, setProducts } = useProducts();

  // DELETE AN ORDER
  const handleDeleteOrder = id => {
    const proceed = window.confirm('Are you sure, you want to delete?');
    if (proceed) {
      axios.delete(`http://localhost:5000/products/${id}`)
        .then(res => {
          if (res.data.deletedCount > 0) {
            alert('deleted successfully');
            const remainingProducts = products.filter(product => product._id !== id);
            setProducts(remainingProducts);
          }
        });
    }
  } 
  
  return (
    <div className="pb-5">
      <h2 className="my-3 fw-bold">Manage All Products</h2>
      <div className="table-responsive">
        <table className="container table table-light">
          <thead>
            <tr>

              <th scope="col">Product Name</th>
              <th scope="col">Image</th>
              
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              products.map(product =>
                <tr key={product._id}>
                  <td className="">{product.name} </td>
                  <td className=""><img src={product.img} className="w-75" alt="product-img"></img></td>
                
                  <td className="">{product.price} BDT</td>

                  <td className="">
                    <button className="btn-danger btn btn-sm" onClick={() => handleDeleteOrder(product._id)}>X</button>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>


    </div>
  );
};

export default ManageProducts;