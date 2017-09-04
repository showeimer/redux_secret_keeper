import React, {Component} from 'react';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      secret: ''
    }
  }

  render() {
    return (
      <form>
        <label>Name:</label>
        <input placeholder="Full Name" name="name" type="text" />

        <label>E-mail:</label>
        <input placeholder="Email address" name="email" type="email" />

        <label>Password:</label>
        <input placeholder="Enter a password" name="password" type="password" />

        <label>Your Secret:</label>
        <textarea type="text" name="secret" />

        <button className="btn">Submit</button>
      </form>
    )
  }
}

export default Register;
