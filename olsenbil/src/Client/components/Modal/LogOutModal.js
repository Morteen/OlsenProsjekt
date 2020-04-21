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
      console.log(
        "NextProps.logOutModalopen resultat :" + nextProps.LogOutModalOpen
      );

      return { LogOutModalOpen: nextProps.LogOutModalOpen };
    }
    // Return null to indicate no change to state.
    return null;
  }
  closeModAndLogOut() {
    this.props.CloseLogOutModal();
    this.props.UserIsLoggingOut();
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
          <Modal.Header
            id="LogOutModal"
            // closeButton
            //onClick={() => this.props.CloseLogOutModal}
          >
            <Modal.Title id="contained-modal-title-vcenter">
              Logg ut
            </Modal.Title>
          </Modal.Header>
          <Modal.Body id="LogOutModal">
            <p>Sikker på at du vil logge ut</p>

            <Button variant="warning" onClick={this.closeModAndLogOut}>
              Ja jeg vil logge ut
            </Button>
            <br></br>
            <hr></hr>
            <Button
              variant="primary"
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
