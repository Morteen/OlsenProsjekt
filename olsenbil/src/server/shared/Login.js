import Validator from "validator";
import isEmpty from "lodash/isEmpty";

export default function isValidalidInputLogin(data) {
  let errors = {};
  let isValid;
  console.log("Data fra validator funksjon", data);
  if (data.username == "") {
    errors.username = "Dette feltet er obligatorisk";
  }

  if (data.password == "") {
    errors.password = "Dette feltet er obligatorisk";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}
