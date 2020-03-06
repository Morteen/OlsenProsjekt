import Validator from "validator";
import isEmpty from "lodash/isEmpty";

export default function isValidalidInputReguser(data) {
  /** 
 * userName: "",
      password: "",
      email: "",
      regnumber: "",
      postalNumber: "",
*/

  let errors = {};
  let isValid;
  console.log("Data fra validator funksjon", data);
  if (Validator.isEmpty(data.password)) {
    errors.username = "Brukernavn feltet er obligatorisk";
  }

  if (Validator.isEmpty(data.email)) {
    errors.password = "Email feltet er obligatorisk";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Passord feltet er obligatorisk";
  }
  if (Validator.isEmpty(data.regnumber)) {
    errors.password = "Registreringsnummer feltet er obligatorisk";
  }
  if (Validator.isEmpty(data.regnumber)) {
    errors.password = "Registreringsnummer feltet er obligatorisk";
  }
  if (Validator.isEmpty(data.postalNumber)) {
    errors.password = "Registreringsnummer feltet er obligatorisk";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}
