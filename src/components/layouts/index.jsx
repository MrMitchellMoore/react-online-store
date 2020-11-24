import React from 'react';

import Header from './header';
import Footer from './footer';

import './layout.css';

export default function Layout({children}) {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
}
