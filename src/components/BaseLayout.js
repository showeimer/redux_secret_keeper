import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';


class BaseLayout extends Component {

  render() {
    return (
      <div>
        <nav>
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
          <button className="btn btn-danger">Log Out</button>
        </nav>
        {this.props.children}
      </div>
    )
  }
}

export default BaseLayout;
