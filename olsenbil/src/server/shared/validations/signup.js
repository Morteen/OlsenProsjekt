import isEmpty from "lodash/isEmpty";

export default function isValidalidInputReguser(data) {
  let errors = {};
  let isValid = true;
  console.log("Data fra validator funksjon", data);
  if (isEmpty(data.username)) {
    errors.username = "Brukernavn feltet er obligatorisk";
  }

  if (isEmpty(data.email)) {
    errors.email = "Email feltet er obligatorisk";
    console.log("Sjekk av isEmpty fra regvalidering " + isEmpty(data.email));
  }

  if (isEmpty(data.password)) {
    errors.password = "Passord feltet er obligatorisk";
  }
  if (isEmpty(data.regnumber)) {
    errors.regnumber = "Registreringsnummer feltet er obligatorisk";
  }

  if (isEmpty(data.postalNumber)) {
    errors.postalNumber = "Registreringsnummer feltet er obligatorisk";
  }
  console.log(errors);
  return {
    errors,
    isValid: isEmpty(errors)
  };
}
