import React from 'react';
import Seo from '../seo';

export default function HomePage () {
  return (
    <React.Fragment>
      <Seo title="Welcome Home" />
      <h1>
        Hello React
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Aliquam vestibulum morbi blandit cursus risus at ultrices.
        Sapien eget mi proin sed libero.
      </p>
    </React.Fragment>
  );
}
