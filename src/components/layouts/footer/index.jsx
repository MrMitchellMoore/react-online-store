import React from 'react';

export default function Footer () {
  return (
    <footer className="page-footer blue-grey">
      <div className="container footer">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Bread</h5>
            <p className="grey-text text-lighten-4">
              A react js demo of an online store.
            </p>
          </div>

        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2020 Mitchell Moore. All rights Reserved
          <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
        </div>
      </div>
    </footer>
  );
}
