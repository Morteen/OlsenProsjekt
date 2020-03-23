import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MaintenaceModal from "../Modal/MaintenaceModal";

import ReactDOM from "react-dom";
import { Modal, Button } from "react-bootstrap";
import {
  fetchMaintenanceHistory,
  handleDeleteMaintenance
} from "../../actions/MaintenanceActions";

class MaintenanceList extends Component {
  constructor(props) {
    super(props);
    this.replaceModalItem = this.replaceModalItem.bind(this);
    this.saveModalDetails = this.saveModalDetails.bind(this);

    this.state = {
      requiredItem: 0,
      localMaintenaceArray: [],
      modalData: {}
    };
  }
  componentDidMount() {
    this.props.fetchMaintenanceHistory();
    this.setState({ localMaintenaceArray: this.props.MaintenaceHistory });
    console.log(
      " Log fra  componentDidMount i maintenance :" +
        JSON.stringify(this.props.MaintenaceHistory)
    );
  }

  ///Modal funksjoner
  replaceModalItem(index) {
    this.setState({
      requiredItem: index
    });
  }

  saveModalDetails(item) {
    const requiredItem = this.state.requiredItem;
    let tempMaintenaceArray = this.state.localMaintenaceArray;
    tempMaintenaceArray[requiredItem] = item;
    this.setState({ localMaintenaceArray: tempMaintenaceArray });
  }
  deleteItem(index) {
    let tempMaintenaceArray = this.state.localMaintenaceArray;
    tempMaintenaceArray.splice(index, 1);
    this.setState({ localMaintenaceArray: tempMaintenaceArray });
  }

  //////////////slutt på modal funksjoner

  handleDeleteRow(id) {
    console.log("lOG FRA DELETE BUTTON " + id);
    this.props.handleDeleteMaintenance(id);
    //Henter den ny Maitenance arrayen fra reducer
    this.props.fetchMaintenanceHistory();
    this.setState({ localMaintenaceArray: this.props.MaintenaceHistory });
  }
  showContent() {
    if (this.state.localMaintenaceArray.length < 1) {
      return (
        <tr>
          <td id="rowVarning">Du har ikke noen registerte noe vedlikehold</td>
        </tr>
      );
    } else {
      return this.state.localMaintenaceArray.map(maintenace => (
        <tr key={maintenace.id}>
          <th scope="row">{maintenace.regNumber}</th>
          <td>{maintenace.date}</td>
          <td>{maintenace.km}</td>
          <td>{maintenace.Description}</td>
          <td>{maintenace.price}</td>
          <td></td>
          <td>
            <button
              type="button"
              className="btn btn-danger btn-sm"
              onClick={id => this.handleDeleteRow(maintenace.id)}
            >
              Delete Row
            </button>
          </td>
          <td>
            <button
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModal"
              onClick={() => this.replaceModalItem(maintenace.id)}
            >
              edit
            </button>{" "}
          </td>
        </tr>
      ));
    }
  }

  render() {
    const requiredItem = this.state.requiredItem;
    const modalData = this.state.localMaintenaceArray[requiredItem];
    console.log(
      "Log av localMaintenaceArray:" +
        JSON.stringify(this.state.localMaintenaceArray[0])
    );
    console.log("Log av ModalData:" + JSON.stringify(modalData));
    console.log("Log av requiredItem:" + requiredItem);
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">regNumber</th>
              <th scope="col"> date</th>
              <th scope="col"> km</th>
              <th scope="col">Description</th>
              <th scope="col">pris</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>{this.showContent()}</tbody>
        </table>
        <MaintenaceModal
          regNumber="" //{modalData.regNumber}
          date="20.03.2020" //{modalData.date}
          km="9999" //{modalData.km}
          Description="test" //{modalData.Description}
          price="3333" //{modalData.price}
          saveModalDetails={this.saveModalDetails}
        />
      </div>
    );
  }
}

MaintenanceList.propTypes = {
  MaintenaceHistory: PropTypes.array,

  handleDeleteMaintenance: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    MaintenaceHistory: state.MaintenanceReducer.MaintenaceHistory
  };
}
export default connect(mapStateToProps, {
  fetchMaintenanceHistory,
  handleDeleteMaintenance
})(MaintenanceList);
