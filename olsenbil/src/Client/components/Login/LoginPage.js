import React, { Component } from "react";
import LoginForm from "./LogInForm";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { userLoginReq } from "../../actions/LoginActions";

class LoginPage extends Component {
  render() {
    const { userLoginReq } = this.props;
    return (
      <div>
        <LoginForm userLoginReq={userLoginReq} />
      </div>
    );
  }
}

LoginPage.propTypes = {
  userLoginReq: PropTypes.func
};

export default connect(null, { userLoginReq })(LoginPage);
