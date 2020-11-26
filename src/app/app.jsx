import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Layout from '../components/layouts';
import HomePage from '../components/pages/homepage';
import AboutPage from '../components/pages/aboutpage';
import ProductsPage from '../components/pages/productspage';
import CartPage from '../components/pages/cartpage';
import CartContext from '../components/cart/context';
import useCart from '../hooks/use-cart';
import './app.css';

export default function App () {
  // const {cart, addToCart} = useCart ([]);
  return (
    <CartContext.Provider value={useCart ([])}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/about-us">
              <AboutPage />
            </Route>
            <Route path="/products">
              <ProductsPage />
            </Route>
            <Route path="/cart">
              <CartPage />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </CartContext.Provider>
  );
}
