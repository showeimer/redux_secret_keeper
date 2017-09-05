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
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);

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
    this.props.register(this.state.email, this.state.password, this.state.name, this.state.secret);
    this.setState({name: '', email: '', password: '', secret: ''});
    this.props.history.push('/login');
  }

  render() {
    return (
      <form className="col-md-8 form" onSubmit={this.handleRegisterSubmit}>
        <h2>Registration:</h2>

        <div className='form-group'>
          <label>Name:</label>
          <input className="form-control" value={this.state.name} onChange={this.handleNameChange} placeholder="Full Name" name="name" type="text" />
        </div>

        <div className='form-group'>
          <label>E-mail:</label>
          <input className="form-control" value={this.state.email} onChange={this.handleEmailChange} placeholder="Email address" name="email" type="email" />

        </div>

        <div className='form-group'>
          <label>Password:</label>
          <input className="form-control" value={this.state.password} onChange={this.handlePasswordChange} placeholder="Enter a password" name="password" type="password" />
        </div>

        <div className='form-group'>
          <label>Your Secret:</label>
          <textarea className="form-control" value={this.state.secret} onChange={this.handleSecretChange} type="text" name="secret" />
        </div>

        <button className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

const mapDispatchToProps = function(dispatch) {
    return {
        register: function(email, password, name, secret) {
            dispatch(register(email, password, name, secret));
        }
    }
}

export default connect(null, mapDispatchToProps)(Register);
