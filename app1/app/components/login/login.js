import React, { Component } from 'react';


class Login extends Component {
  render() {
    return (
      <div className="login-form-container"> 
        <form action="">
          <div className="container">
            <label><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required value="vishal"></input>

            <label><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required value="vishal"></input>

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