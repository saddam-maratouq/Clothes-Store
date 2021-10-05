import React, { Component } from "react";

import FormInput from "../form-input/form-Input";

import CustoumButton from "../Coustem-button/Custoum-button";

import { auth, creatuserprofileDocument } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      /////// in this form need to creat and store new client (email) so need use aysnc and createUserWithEmailAndPassword methode

      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await creatuserprofileDocument(user, { displayName }); //// user its name from Auth dont change it !!!! 

      this.setState({ 
        
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  ///////////////////////////////////////////////////

  handelChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="sigin-up">
        <h2 className="title"> don't have an account </h2>
        <span> sign up with your email and password </span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            required
            value={displayName}
            onChange={this.handelChange}
            label="Display Name"
          />

          <FormInput
            type="email"
            name="email"
            required
            value={email}
            label="Email"
            onChange={this.handelChange}
          />

          <FormInput
            type="password"
            name="password"
            required
            value={password}
            hChange={this.handelChange}
            label="password"
          />

          <FormInput
            type="password"
            name="confirmPassword"
            required
            value={confirmPassword}
            onChange={this.handelChange}
            label="confirm Password"
          />

          <CustoumButton type="submit"> SIGN UP </CustoumButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
