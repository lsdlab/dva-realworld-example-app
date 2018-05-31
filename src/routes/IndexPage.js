import React from 'react';
import { connect } from 'dva';

function IndexPage() {
  return (
    <div>
      <nav className="navbar navbar-light">
        <div className="container">
          <a className="navbar-brand" href="/">conduit</a>
          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
              <a className="nav-link active" href="">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                <i className="ion-compose"></i>&nbsp;New Post
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                <i className="ion-gear-a"></i>&nbsp;Settings
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">Sign up</a>
            </li>
          </ul>
        </div>
      </nav>
      <footer>
        <div className="container">
          <a href="/" className="logo-font">conduit</a>
          <span className="attribution">
            An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT.
          </span>
        </div>
      </footer>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
