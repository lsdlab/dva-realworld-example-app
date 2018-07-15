import React, { Component } from 'react';
import { connect } from 'dva';

import Header from '../components/Partial/Header'
import Footer from '../components/Partial/Footer'


@connect(({ login, user }) => ({
  login,
  user,
}))
export default class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="home-page">
          <div className="banner">
            <div className="container">
              <h1 className="logo-font">conduit</h1>
              <p>A place to share your knowledge.</p>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
