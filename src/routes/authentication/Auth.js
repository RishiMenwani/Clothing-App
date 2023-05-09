import React from "react";

import SignUpForm from "../../components/SignUpForm";
import SignInForm from "../../components/SignInForm";

import '../../styles/authentication.styles.scss'

function Authentication() {
  return (
    <div className="authentication-container"> 
      <h1> Welcome to the Sign in page</h1>
      <SignInForm />
      <SignUpForm />
    </div>
  );
}

export default Authentication;
