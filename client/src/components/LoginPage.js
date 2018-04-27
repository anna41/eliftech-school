import React, { Component } from "react";
import FacebookLoginButton from "react-social-login-buttons/lib/buttons/FacebookLoginButton";
import GoogleLoginButton from "react-social-login-buttons/lib/buttons/GoogleLoginButton";
import { Redirect } from "react-router-dom";

class LoginForm extends Component {
  // googleAuthSubmit = () => {
  //   fetch("/users/google", {
  //     method: "GET",
  //     mode: "no-cors",
  //     credentials: "same-origin",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*"
  //     }
  //   })
  //     .then(res => {
  //       console.log(res);
  //       // res.json().then(data => console.log(data));
  //     })
  //     .catch(err => console.log(err));
  // };
  state = {
    redirect: false
  };

  componentWillMount() {
    this.handleToken();
  }
  getToken = () => {
    let token = localStorage.getItem("token");
    console.log(token);
  };

  handleToken = () => {
    const loc = this.props.location;
    // console.log(loc);
    if (loc.pathname.length > 5) {
      this.setState({ redirect: true });
      const token = loc.pathname.slice(1);
      console.log(token);
      this.handleStorageSave(token);
    }
  };
  handleStorageSave = token => {
    localStorage.setItem("token", token);
  };
  render() {
    this.getToken();
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: "/welcome",
            state: { token: this.props.location.pathname }
          }}
        />
      );
    }
    return (
      <div className="paper">
      <h1>Welcome to eliftech school!</h1>
      <h3>To find incoming test, please sign in.</h3>
      <div className = "login-button">
          <div className = "btn-groupe">
          <a href="/users/auth/facebook">
              <div className = "login-btn-facebook">
                  <span  className = "login-btn-size">
                      <i className="demo-icon icon-facebook-official login-icon-size" ></i>
                  </span>
                  <span>Login with Facebook</span>
              </div>
          </a>
          <a href="/users/google">
              <div className = "login-btn-google">
                  <span  className = "login-btn-size">
                  <i className="demo-icon icon-gplus login-icon-size"></i>
                  </span>
                  <span>Login with Google</span>
              </div>
          </a>
          </div>
      </div>
  </div>  
    );
  }
}

export default LoginForm;
