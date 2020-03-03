import React, { Component } from "react";
import SignupForm from "./SignupForm";

class signupPage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-med-offset-4">
          <SignupForm />
        </div>
      </div>
    );
  }
}
export default signupPage;
