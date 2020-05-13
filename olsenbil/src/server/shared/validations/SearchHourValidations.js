import isEmpty from "lodash/isEmpty";

export default function isValidalidInputSearchHour(data) {
  let errors = {};
  let isValid = true;
  console.log("Data fra validator funksjon", data);
  if (isEmpty(data.FromDate)) {
    errors.FromDate = "Du må legge inn en søkedato :-)";
  }

  if (isEmpty(data.ToDate)) {
    errors.ToDate = "Du må legge inn en søkedato";
  }

  console.log(errors);
  return {
    errors,
    isValid: isEmpty(errors),
  };
}
