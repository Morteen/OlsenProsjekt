import React, { Component } from "react";

class MaintenaceModal extends Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
    this.state = {
      regNumber: "",
      date: "",
      km: "",
      Description: "",
      price: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      regNumber: nextProps.regNumber,
      date: nextProps.date,
      km: nextProps.km,
      Description: nextProps.Description,
      price: nextProps.price
    });
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
                Edit Jewel
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
              <p>
                <span className="modal-lable">Regnummer:</span>
                <input
                  value={this.state.regNumber}
                  onChange={e => this.regNumberHandler(e)}
                />
              </p>
              <p>
                <span className="modal-lable">Dato :</span>
                <input
                  value={this.state.date}
                  onChange={e => this.dateHandler(e)}
                />
              </p>
              <p>
                <span className="modal-lable">Kilometer:</span>
                <input
                  value={this.state.km}
                  onChange={e => this.kmHandler(e)}
                />
              </p>

              <p>
                <span className="modal-lable">Description:</span>
                <input
                  value={this.state.Description}
                  onChange={e => this.DescriptionHandler(e)}
                />
              </p>
              <p>
                <span className="modal-lable">Pris:</span>
                <input
                  value={this.state.price}
                  onChange={e => this.priceHandler(e)}
                />
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={() => {
                  this.handleSave();
                }}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MaintenaceModal;
