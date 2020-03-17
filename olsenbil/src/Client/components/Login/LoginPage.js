import React, { Component } from "react";
import LoginForm from "./LogInForm";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { userLoginReq } from "../../actions/LoginActions";

class LoginPage extends Component {
  componentWillUpdate() {
    // this.props.fetch();
  }
  render() {
    const { userLoginReq, accessCredentials } = this.props;
    console.log("Logger props i Loginpage: " + this.props);

    return (
      <div className="row">
        <div className="col-md-2 col-med-offset-4">
          <LoginForm userLoginReq={(userLoginReq, accessCredentials)} />
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  userLoginReq: PropTypes.func,
  accessCredentials: PropTypes.object
};
const mapStateToprops = state => ({
  accessCredentials: state.loginReducer.accessCredentials
});

export default connect(mapStateToprops, { userLoginReq })(LoginPage);
