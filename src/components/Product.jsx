import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
  const { product } = props;
  console.log(props);
  return (
    <div>
      {' '}
      <div className="card">
        <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <Link to={'/Aboutproduct'} className="btn btn-primary">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
