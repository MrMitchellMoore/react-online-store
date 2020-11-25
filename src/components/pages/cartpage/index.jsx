import React, {useContext} from 'react';
import Seo from '../seo';
import CartContext from '../../../app/cart-context';
import './cart.css';

function withQuantities (products) {
  return products;
}

export default function CartPage () {
  const {cart} = useContext (CartContext);

  return (
    <React.Fragment>
      <Seo title="My Cart" />
      <h1 className="cart-title">My Cart</h1>
      <table className="responsive-table centered">
        <thead>
          <tr>
            <th>Product name</th>
            <th>Price</th>
            <th>Qty</th>
            <th>SubTotal</th>
          </tr>
        </thead>
        <tbody>
          {withQuantities (cart).map (product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{0}</td>
              <td>${0}</td>
              <tr />
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
}
