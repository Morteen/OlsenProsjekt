import React, { Component } from "react";
import SignupForm from "./SignupForm";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { userSignupReq } from "../../actions/signupActions";

class signupPage extends Component {
  render() {
    const { userSignupReq } = this.props;
    return (
      <div className="row">
        <div className="col-md-4 col-med-offset-4">
          <SignupForm userSignupReq={userSignupReq} />
        </div>
      </div>
    );
  }
}
signupPage.propTypes = {
  userSignupReq: PropTypes.func
};

export default connect(null, { userSignupReq })(signupPage);
