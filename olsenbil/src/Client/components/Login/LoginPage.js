import React, { Component } from "react";
import LoginForm from "./LogInForm";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { userLoginReq } from "../../actions/LoginActions";

class LoginPage extends Component {
  componentWillUpdate() {
    this.props.fetch();
  }
  render() {
    const { userLoginReq, accessToken } = this.props;
    console.log("Logger props i Loginpage: " + this.props);

    return (
      <div>
        <LoginForm userLoginReq={(userLoginReq, accessToken)} />
      </div>
    );
  }
}

LoginPage.propTypes = {
  userLoginReq: PropTypes.func,
  accessToken: PropTypes.object
};
const mapStateToprops = state => ({
  accessToken: state.accessToken
});

export default connect(mapStateToprops, { userLoginReq })(LoginPage);
