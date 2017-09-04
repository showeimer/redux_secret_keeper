import React, {Component} from 'react';
import {connect} from 'react-redux';
import {register} from '../actions/actions';

class Register extends Component {
  constructor(props) {
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSecretChange = this.handleSecretChange.bind(this);

    this.state = {
      name: '',
      email: '',
      password: '',
      secret: ''
    }
  }

  handleNameChange(event) {
    this.setState({name: event.target.value})
  }
  handleEmailChange(event) {
    this.setState({email: event.target.value})
  }
  handlePasswordChange(event) {
    this.setState({password: event.target.value})
  }
  handleSecretChange(event) {
    this.setState({secret: event.target.value})
  }
  handleRegisterSubmit(event) {
    event.preventDefault();
    register();
  }

  render() {
    return (
      <form onSubmit={this.handleRegisterSubmit}>
        <label>Name:</label>
        <input value={this.state.name} onChange={this.handleNameChange} placeholder="Full Name" name="name" type="text" />

        <label>E-mail:</label>
        <input value={this.state.email} onChange={this.handleEmailChange} placeholder="Email address" name="email" type="email" />

        <label>Password:</label>
        <input value={this.state.password} onChange={this.handlePasswordChange} placeholder="Enter a password" name="password" type="password" />

        <label>Your Secret:</label>
        <textarea value={this.state.secret} onChange={this.handleSecretChange} type="text" name="secret" />

        <button className="btn">Submit</button>
      </form>
    )
  }
}

const mapDispatchToProps = function(dispatch) {
    return {
        register: function(name, email, password, secret) {
            dispatch(register(name, email, password, secret));
        }
    }
}

export default connect(null, mapDispatchToProps)(Register);
