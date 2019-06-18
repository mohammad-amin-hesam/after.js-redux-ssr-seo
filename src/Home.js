import React, { Component } from "react";
import logo from "./react.svg";
import "./Home.css";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

class Home extends Component {
  static async getInitialProps({ req, res, match, history, location, ...ctx }) {
    return { whatever: "stuff" };
  }

  render() {
    return (
      <>
        <Helmet>
          <title>خانه</title>
        </Helmet>
        <div className="Home">
          <div className="Home-header">
            <img src={logo} className="Home-logo" alt="logo" />
            <h2>Welcome to After.js</h2>
          </div>
          <p className="Home-intro">
            To get started, edit <code>src/Home.js</code> or{" "}
            <code>src/About.js</code>and save to reload.
          </p>
          <Link to="/about">About -></Link>
          <div style={{ marginTop: "50px" }}>
            <Link to="/seo">Seo, Fetch</Link>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
