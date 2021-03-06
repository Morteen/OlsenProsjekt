import React, { Component } from "react";
import TextFieldGroup from "../commen/TextFieldGroup";
import TextAreaGroup from "../commen/TextAreaGroup";

class MaintenaceModal extends Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
    this.state = {
      id: "",
      regNumber: "",
      date: "",
      km: "",
      Description: "",
      price: "",
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      id: nextProps.id,
      regNumber: nextProps.regNumber,
      date: nextProps.date,
      km: nextProps.km,
      Description: nextProps.Description,
      price: nextProps.price
    });
  }

  idHandler(e) {
    this.setState({ id: e.target.value });
  }
  regNumberHandler(e) {
    this.setState({ regNumber: e.target.value });
  }

  dateHandler(e) {
    this.setState({ date: e.target.value });
  }
  kmHandler(e) {
    this.setState({ km: e.target.value });
  }
  DescriptionHandler(e) {
    this.setState({ Description: e.target.value });
  }
  priceHandler(e) {
    this.setState({ price: e.target.value });
  }

  handleSave() {
    const item = this.state;
    this.props.saveModalDetails(item);
  }

  render() {
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Rediger vedlikeholds opplysninger
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <TextFieldGroup
                type="Text"
                field="regNumber"
                value={this.state.regNumber}
                label="Registeringsnummer"
                error={this.state.errors.regNumber}
                placeholder="Reg nummer"
                onChange={e => this.regNumberHandler(e)}
              />

              <TextFieldGroup
                type="Date"
                field="date"
                value={this.state.date}
                label="Dato"
                error={this.state.errors.date}
                placeholder="Dato"
                onChange={e => this.dateHandler(e)}
              />

              <TextFieldGroup
                type="Text"
                field="km"
                value={this.state.km}
                label="Kilometerstand"
                error={this.state.errors.km}
                placeholder="Kilometer"
                onChange={e => this.kmHandler(e)}
              />

              <TextAreaGroup
                field="Description"
                value={this.state.Description}
                label="Beskrivelse"
                error={this.state.errors.Description}
                placeholder="Beskrivelse"
                onChange={e => this.DescriptionHandler(e)}
              />

              <TextFieldGroup
                type="Text"
                field="price"
                value={this.state.price}
                label="Pris"
                error={this.state.errors.price}
                placeholder="Pris"
                onChange={e => this.priceHandler(e)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Lukk
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={() => {
                  this.handleSave();
                }}
              >
                lagre
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MaintenaceModal;
