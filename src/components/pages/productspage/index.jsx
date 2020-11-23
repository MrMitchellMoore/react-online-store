import React from 'react';
import Seo from '../seo';
import Product from './product';
import products from '../../data/products.json';

import './styles.css';

export default function ProductsPage () {
  return (
    <React.Fragment>
      <Seo title="Our Products are awesome" />
      <div className="container">
        <h1>Welcome to our store!</h1>
        <div className="products">
          {products.map (product => <Product key={product.id} {...product} />)}
        </div>
      </div>
    </React.Fragment>
  );
}
