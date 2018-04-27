// import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import axios from "axios";

// class App extends Component {
//   googleAuthSubmit = () => {
//     fetch("/users/google", {
//       method: "GET",
//       mode: "no-cors",
//       credentials: "same-origin",
//       headers: {
//         "Content-Type": "application/json",
//         "Access-Control-Allow-Origin": "*"
//       }
//     })
//       .then(res => {
//         console.log(res);
//         // res.json().then(data => console.log(data));
//       })
//       .catch(err => console.log(err));
//   };

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>

//         <button onClick={this.googleAuthSubmit}>Google LogIn</button>
//         {/* <a href="/users/google">Google LogIn</a>
//         <a href="/users/auth/facebook">Facebook LogIn</a> */}

//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";
import LoginPage from "./components/LoginPage";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Welcome from "./components/WelcomePage";
import Secret from "./components/Secret";

class App extends Component {
  handleUserLogOut = () => {
    localStorage.removeItem("token");
  };
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={"./3T2En.png"} className="App-logo" alt="logo" />
          </header>
          {/* <LoginPage /> */}
          {/* <button onClick={this.handleUserLogOut}>LogOut</button> */}
          <Switch>
            <Route path="/welcome" component={Welcome} />
            <Route path="/secret" component={Secret} />
            <Route path="/" component={LoginPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
