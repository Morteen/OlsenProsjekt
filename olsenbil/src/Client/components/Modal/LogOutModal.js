import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "react-toastify/dist/ReactToastify.css";
import { UserIsLoggingOut } from "../../actions/UserActions";
import { CloseLogOutModal } from "../../actions/ModalAction";
import { Modal, Button } from "react-bootstrap";

class LogOutModal extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired, //Lager dennefor å bruke redirect til åpnings siden
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      isAuth: "",
      LogOutModalOpen: "",
    };
    this.closeModAndLogOut = this.closeModAndLogOut.bind(this);
  }

  static getDerivedStateFromProps(nextProps, state) {
    if (state.isAuth !== nextProps.isAuth) {
      return { isAuth: nextProps.isAuth };
    } else if (state.LogOutModalOpen !== nextProps.LogOutModalOpen) {
      return { LogOutModalOpen: nextProps.LogOutModalOpen };
    }
    // Return null to indicate no change to state.
    return null;
  }
  closeModAndLogOut() {
    this.props.CloseLogOutModal();
    this.props.UserIsLoggingOut();
    this.context.router.replace("/");
  }

  render() {
    return (
      <div>
        <Modal
          show={this.props.LogOutModalOpen}
          size="sm"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header className="LogOutModal">
            <Modal.Title id="contained-modal-title-vcenter">
              Logg ut
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="LogOutModal">
            <p>Sikker på at du vil logge ut</p>

            <Button
              variant="warning"
              size="lg"
              onClick={this.closeModAndLogOut}
            >
              Ja jeg vil logge ut!!&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;
            </Button>
            <br></br>
            <hr></hr>
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                this.props.CloseLogOutModal();
              }}
            >
              Tilbake til bilrapport.no
            </Button>
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
