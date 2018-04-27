import React, { Component } from "react";
import axios from 'axios';

class Secret extends Component {
  state = {};

  componentWillMount() {
    const token = this.getToken();
    let myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    // axios.get('/secret', {}, {
    //     headers: { 'Authorization': token }
    //   })
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err))
    let req = {
        method: "GET",
        headers: myHeaders
    }
    fetch('/secret', req)
        .then(res => console.log(res))
      .catch(err => console.log(err))
  }
  getToken = () => {
    let token = localStorage.getItem("token");
    return token;
  };

  render() {
    return (
      <div className="paper">
        <h1>Secret information</h1>
        <h1>Secret information</h1>
        <h1>Secret information</h1>
        <h1>Secret information</h1>
        <h1>Secret information</h1>
      </div>
    );
  }
}

export default Secret;
