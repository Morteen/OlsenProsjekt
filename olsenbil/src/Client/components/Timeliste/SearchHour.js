import React, { Component } from "react";
import TextFieldGroup from "../commen/TextFieldGroup";
import isValidalidInputSearchHour from "../../../server/shared/validations/SearchHourValidations";

export default class SearchHour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FromDate: "",
      ToDate: "",
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  isValid() {
    const { errors, isValid } = isValidalidInputSearchHour(this.state);

    if (!isValid) {
      this.setState({ errors, isValid });
    }
    return isValid;
  }
  onSubmit(e) {
    e.preventDefault();
    alert("Knappen virker");
    if (this.isValid()) {
      const searchData = {
        FromDate: this.state.FromDate,
        ToDate: this.state.ToDate,
      };

      //this.props. action kommer her
      this.clearInput();
    }
  }
  clearInput() {
    this.setState({
      FromDate: "",
      ToDate: "",
      errors: {},
    });
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="col">
        <form onSubmit={this.onSubmit}>
          <div className="container">
            <div className="row">
              <div className="col"></div>
              <div className="col">
                <h5 id="searchHeading">Finn mine timer</h5>
              </div>
              <div className="col"></div>
            </div>

            <div className="row">
              <div className="col">
                <TextFieldGroup
                  type="Date"
                  field="FromDate"
                  value={this.state.FromDate}
                  label="Fra dato"
                  error={errors.FromDate}
                  placeholder="15.05.2020"
                  onChange={this.onChange}
                  className="form-control form-control-sm"
                />
              </div>
              <div className="col-3"></div>
              <div className="col">
                <TextFieldGroup
                  type="Text"
                  field="ToDate"
                  value={this.state.ToDate}
                  label="Til dato"
                  error={errors.ToDate}
                  placeholder="Til"
                  onChange={this.onChange}
                  className="form-control form-control-sm"
                />
              </div>
            </div>
            <div className="row">
              <div className="col"></div>
              <div className="col">
                <button className="btn btn-secondary" id="searchBtn">
                  Search
                </button>
              </div>
              <div className="col"></div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
