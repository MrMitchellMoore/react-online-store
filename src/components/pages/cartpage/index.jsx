import React, {useContext} from 'react';
import Seo from '../seo';
import CartContext from '../../cart/context';

import {formatCurrency} from '../../../modules/utils';
import './cart.css';

function withQuantities (products) {
  return products.reduce ((acc, product) => {
    const existing = acc.find (p => product.id === p.id);
    return existing
      ? [...acc.map (p => (p.id === product.id ? {...p, qty: p.qty + 1} : p))]
      : [...acc, {...product, qty: 1}];
  }, []);
}

function handleChangeQty () {}

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
              <td>
                <input
                  type="text"
                  value={product.qty}
                  onChange={handleChangeQty}
                />
              </td>
              <td>{formatCurrency (product.price * product.qty)}</td>
              <td />
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
}
