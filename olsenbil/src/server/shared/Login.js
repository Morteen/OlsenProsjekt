import isEmpty from "lodash/isEmpty";

export default function isValidalidInputLogin(data) {
  let errors = {};
  let isValid = true;
  console.log("Data fra validator funksjon", data);
  if (data.username === "") {
    errors.username = "Dette feltet er obligatorisk";
  }

  if (data.password === "") {
    errors.password = "Dette feltet er obligatorisk";
  }
  console.log(
    "Log innen fra validerings func errors= " + errors.username,
    errors.password + " Isvalid =" + isValid
  );
  console.log("Log fra login validering", errors);
  console.log("Log fra isEmty i validering:", isEmpty(errors));
  return {
    errors,
    isValid: isEmpty(errors)
  };
}
