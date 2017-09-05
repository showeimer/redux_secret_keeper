import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getDashboard} from '../actions/actions';
import { withRouter } from 'react-router-dom';
import {loadTokenFromCookie} from "../actions/actions";


class Dashboard extends Component {

  componentWillMount() {
       const loadToken = this.props.loadToken;
       loadToken();
   }

  componentDidMount() {
    this.props.getDashboard(this.props.token);
  }

  render() {
    return (
      <div className="card text-center">
        <div className="card-header">
          {this.props.name}
        </div>

        <div className="card-block secret">
          <h4>Your Secret:</h4>
          <p className="card-text">{this.props.secret}</p>
        </div>

        <div className="card-footer text-muted">
          {this.props.email}
        </div>
      </div>
    )
  }
}

const mapStateToProps = function(state) {
    return {
      token: state.token,
      email: state.email,
      name: state.name,
      secret: state.secret
    }
}

const mapDispatchToProps = function(dispatch) {
    return {
        getDashboard: function(token) {
            dispatch(getDashboard(token));
        },
        loadToken: () => dispatch(loadTokenFromCookie())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));
