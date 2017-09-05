import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
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
      <div>
        <nav>
          <NavLink exact to="/">Home</NavLink>
          <NavLink exact to="/register">Register</NavLink>
          <NavLink exact to="/login">Login</NavLink>
          <button onClick={this.handleLogOut} className="btn btn-danger">Log Out</button>
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

export default connect(null, mapDispatchToProps)(BaseLayout);
