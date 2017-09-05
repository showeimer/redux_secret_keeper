import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import {userLogOut} from '../actions/actions';

class BaseLayout extends Component {
  constructor(props) {
    super(props);

    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut = (event) => {
    this.props.userLogOut();
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="wrapper">
        <nav className="nav justify-content-end bg-dark">
          <NavLink className="nav-link" exact to="/">Home</NavLink>
          <NavLink className="nav-link" exact to="/register">Register</NavLink>
          <NavLink className="nav-link" exact to="/login">Login</NavLink>
          <NavLink style={{color: 'yellow'}} className="nav-link" exact to="/dashboard">Secret</NavLink>
          <button className="" onClick={this.handleLogOut} className="btn btn-danger">Log Out</button>
        </nav>
        {this.props.children}
      </div>
    )
  }
}

const mapDispatchToProps = function(dispatch) {
    return {
        userLogOut: function() {
            dispatch(userLogOut());
        }
    }
}

export default withRouter(connect(null, mapDispatchToProps)(BaseLayout));
