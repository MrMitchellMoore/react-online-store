import React from 'react';
import Seo from '../seo';
import Product from './product';
import products from '../../data/products.json';

export default function ProductsPage () {
  return (
    <React.Fragment>
      <Seo title="Our Products are awesome" />
      <h1>Welcome to our store!</h1>
      {products.map (product => <Product {...product} />)}
    </React.Fragment>
  );
}
