import React, { PureComponent } from 'react';

export default class Header extends PureComponent {
  render() {

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
      </div>
    );
  }
}
