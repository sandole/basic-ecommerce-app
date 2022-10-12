import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <>
      <h2>Products</h2>

      <Link to={'/product/add'} className="btn btn-success mt-3">
        Add New Product
      </Link>

      <table className="table table-striped mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Oprations</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Product 1</td>
            <td>100</td>
            <td>
              <button className="btn btn-danger btn-sm">Delete</button>
              <button className="btn btn-info btn-sm">View</button>
              <button className="btn btn-primary btn-sm">Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Products;
