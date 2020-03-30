import Toast from "react-bootstrap/Toast";
import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

export default class myToast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addToastShow: false
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      addToastShow: nextProps.addToastShow
    });
  }
  render() {
    const [show, setShow] = this.props;

    return (
      <Row>
        <Col xs={6}>
          <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={1000}
            autohide
          >
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>
              Woohoo, you're reading this text in a Toast!
            </Toast.Body>
          </Toast>
        </Col>
        <Col xs={6}>
          <Button onClick={() => setShow(true)}>Show Toast</Button>
        </Col>
      </Row>
    );
  }
}
