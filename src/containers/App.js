import React, { Component } from 'react';
import '../style/App.css';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {loadTokenFromCookie} from "../actions/actions";

class App extends Component {

  componentWillMount() {
    const loadToken = this.props.loadToken;
    loadToken();
  }

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

const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadToken: () => dispatch(loadTokenFromCookie())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
