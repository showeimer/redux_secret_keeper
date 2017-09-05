import React, {Component} from 'react';
import {connect} from 'react-redux';
import {login} from '../actions/actions';

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
      <form onSubmit={this.handleLoginSubmit}>

        <label>E-mail:</label>
        <input value={this.state.email} onChange={this.handleEmailChange} placeholder="Email address" name="email" type="email" />

        <label>Password:</label>
        <input value={this.state.password} onChange={this.handlePasswordChange} placeholder="Enter a password" name="password" type="password" />

        <button className="btn">Login</button>
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

export default connect(null, mapDispatchToProps)(Register);
