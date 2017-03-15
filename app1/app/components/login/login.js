import React, { Component } from 'react';
import GeneralActionsCreator from '../../actions/GeneralActionsCreator'


class Login extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      user: 'admin',
      password: 'admin123'
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    GeneralActionsCreator.login('vishal', 'sh123');
  }
  render() {
    return (
      <div className="login-form-container"> 
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="container">
            <label><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required defaultValue={this.state.user}></input>

            <label><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required defaultValue={this.state.password}></input>

            <button type="submit">Login</button>
          </div>

          <div className="container" >
            <button type="button" className="cancelbtn">Cancel</button>
            <span className="psw">Forgot <a href="#">password?</a></span>
          </div>
        </form>
      </div>
    )
  }
}

export default Login;