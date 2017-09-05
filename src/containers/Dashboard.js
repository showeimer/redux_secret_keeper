import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getDashboard} from '../actions/actions';

class Dashboard extends Component {

  componentDidMount() {
    this.props.getDashboard(this.props.token);
  }

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h1>{this.props.secret}</h1>
        <h1>{this.props.email}</h1>
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
