import React, { Component } from 'react';
import '../style/App.css';
import {Link} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-3">Got Secrets?</h1>
        <h2 className="lead">Your Trapper-Keeper for secrets.  Sign up today.  It's easy, free, and about as reliable as somebody you trust!</h2>
        <hr />

        <h5>Create an account to get started, or log back in if you're already on Secret Keeper.</h5>
        <Link className="btn btn-primary" to="/register">Register</Link>
        <Link className="btn btn-secondary" to="/login">Log Back In</Link>
      </div>
    );
  }
}

export default App;
