import React, {Component} from 'react';
import {connect} from 'react-redux';
import {login} from '../actions/actions';
import { withRouter } from 'react-router-dom';

class Register extends Component {
  constructor(props) {
    super(props);

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);

    this.state = {
      email: '',
      password: '',
    }
  }


  handleEmailChange(event) {
    this.setState({email: event.target.value})
  }
  handlePasswordChange(event) {
    this.setState({password: event.target.value})
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    this.props.login(this.state.email,this.state.password);
    this.setState({email: '', password: ''});
    this.props.history.push('/dashboard');
  }

  render() {
    return (
      <form className="col-md-8 form" onSubmit={this.handleLoginSubmit}>

        <div className="form-group">
          <label>E-mail:</label>
          <input className="form-control" value={this.state.email} onChange={this.handleEmailChange} placeholder="Email address" name="email" type="email" />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input className="form-control" value={this.state.password} onChange={this.handlePasswordChange} placeholder="Enter a password" name="password" type="password" />
        </div>

        <button className="btn btn-primary">Login</button>
      </form>
    )
  }
}

const mapDispatchToProps = function(dispatch) {
    return {
        login: function(email, password) {
            dispatch(login(email, password));
        }
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Register));
