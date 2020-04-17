import React, { Component } from "react";
import { connect, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import "react-toastify/dist/ReactToastify.css";
import { UserIsLoggingOut } from "../../actions/UserActions";
import { CloseLogOutModal } from "../../actions/ModalAction";
import { Modal, Button } from "react-bootstrap";

class LogOutModal extends Component {
  constructor(props) {
    super(props);
    this.handelClose = this.handelClose.bind(this);
    this.state = {
      isAuth: true,
      LogOutModalOpen: true,
      LogOutModalShow: false,
      test: false,
      hidden: false,
      show: false,
    };
    this.onResponse = this.onResponse.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    let count = 0;
    if (nextProps) {
      count++;
      alert(count + "   " + JSON.stringify(nextProps));
    }
    if (this.state.isAuth !== nextProps.isAuth) {
      console.log("Nextprops.isAuth: " + nextProps.isAuth);
      this.onResponse(nextProps.nextProps.isAut);
    } else if (this.state.LogOutModalOpen !== nextProps.LogOutModalOpen) {
      console.log("Nextprops.LogoutModalOpen: " + nextProps.LogOutModalOpen);
      this.onResponse(nextProps.LogOutModalOpen);
    } else {
      console.log("Nextprops else alternativ " + JSON.stringify(nextProps));
    }

    /* if (nextProps.isAuth !== undefined) {
      if (this.state.isAuth !== nextProps.isAuth) {
        this.setState({ isAuth: nextProps.isAuth });
        alert("this.state.isAuth " + this.state.isAuth);
      }
    }

    if (
      this.state.LogOutModalShow !== nextProps.LogoutModalOpen &&
      nextProps.LogoutModalOpen !== undefined
    ) {
      this.onResponse(nextProps.LogoutModalOpen);
      alert("nextProps.LogOutModalShow" + nextProps.LogOutModalShow);
      this.setState({ LogOutModalShow: nextProps.LogOutModalShow });
    }
    if (
      this.state.isAuth !== nextProps.LogoutModalOpen &&
      nextProps.LogoutModalOpen !== undefined
    ) {
      alert(" nextProps.LogoutModalOpen " + nextProps.LogoutModalOpen);
      console.warn("Log fra comWillrecive" + nextProps.LogoutModalOpen);
      this.onResponse(nextProps.LogoutModalOpen);
    }*/
  }

  /* static getDerivedStateFromProps(nextProps, state) {
    if (state.isAuth !== nextProps.isAuth) {
      return { isAuth: nextProps.isAuth };
    }
    if (state.LogOutModalShow !== nextProps.isAuth) {
      alert(JSON.stringify(nextProps.isAuth));
      this.onResponse(nextProps.isAuth);
      return { LogOutModalShow: nextProps.isAuth };
    }

    // Return null to indicate no change to state.
    return null;
  }*/

  onResponse(nextProps) {
    this.handelClose(nextProps);
  }

  handelClose(nextProps) {
    console.warn("Warn fra lukking av modal: " + nextProps);
    this.props.openLogOutModal(nextProps);
  }

  render() {
    const { show } = this.props;

    return (
      <div>
        <Modal
          show={this.props.LogOutModalOpen}
          onHide={this.props.CloseLogOutModal}
          size="sm"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header id="modalHeaderUser" closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Logg ut
            </Modal.Title>
          </Modal.Header>
          <Modal.Body id="LogOutModalUser">
            <p>Sikker på at du vil logge ut</p>
            <ul>
              <li>
                <Button
                  variant="secondary"
                  onClick={this.props.UserIsLoggingOut}
                >
                  Close
                </Button>
                <Button variant="primary" onClick={this.props.CloseLogOutModal}>
                  Save Changes
                </Button>
              </li>
            </ul>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

LogOutModal.propTypes = {
  UserIsLoggingOut: PropTypes.func,
  CloseLogOutModal: PropTypes.func,
  isAuth: PropTypes.bool,
  LogOutModalOpen: PropTypes.bool,
};
const mapStateToprops = (state) => ({
  isAuth: state.UserReducer.isAuth,
  LogOutModalOpen: state.ModalReducer.LogOutModalOpen,
});

export default connect(mapStateToprops, { UserIsLoggingOut, CloseLogOutModal })(
  LogOutModal
);
