import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TextFieldGroup from "../commen/TextFieldGroup";
import isValidalidInputSearchHour from "../../../server/shared/validations/SearchHourValidations";
import { searchMyHour, clearMySearch } from "../../actions/TimelisteAction";

class SearchHour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FromDate: "",
      ToDate: "",
      errors: {},
      accessCredentials: { error: "" },
      searcBtnState: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      accessCredentials: this.props.accessCredentials,
    });
  }

  static getDerivedStateFromProps(nextProps, state) {
    if (nextProps.accessCredentials !== state.accessCredentials) {
      return { accessCredentials: nextProps.accessCredentials };
    }

    // Return null to indicate no change to state.
    return null;
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

    if (this.isValid()) {
      const searchData = {
        FromDate: this.state.FromDate,
        ToDate: this.state.ToDate,
        token: this.state.accessCredentials,
        phone: "40042106",
      };

      this.props.searchMyHour(searchData);
      this.clearInput();
      if (this.state.searcBtnState === false) {
        this.setState({ searcBtnState: true });
      }
    }
  }
  clearInput() {
    this.setState({
      FromDate: "",
      ToDate: "",
      errors: {},
    });
  }

  ClearSerach() {
    if (this.state.searcBtnState === true) {
      this.setState({ searcBtnState: false });
    }
    this.props.clearMySearch();
  }
  showClearBtn() {
    return this.state.searcBtnState ? (
      <div className="col">
        <button
          className="btn btn-secondary"
          onClick={() => this.ClearSerach()}
        >
          Clear
        </button>
      </div>
    ) : (
      <div></div>
    );
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
                  type="Date"
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
              {this.showClearBtn()}

              <div className="col"></div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

SearchHour.propTypes = {
  // Timer: PropTypes.array,
  searchMyHour: PropTypes.func.isRequired,
  clearMySearch: PropTypes.func.isRequired,

  newRegtime: PropTypes.object,
};

const mapStateToprops = (state) => ({
  accessCredentials: state.loginReducer.accessCredentials,
});
export default connect(mapStateToprops, {
  searchMyHour,
  clearMySearch,
})(SearchHour);
