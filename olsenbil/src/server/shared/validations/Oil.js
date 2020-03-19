import isEmpty from "lodash/isEmpty";

export default function isValidalidInputOil(data) {
  let errors = {};
  let isValid = true;
  console.log("Data fra validator funksjon", data);
  if (isEmpty(data.regNumber)) {
    errors.regNumber = "Du må ha regnummer :-)";
  }

  if (isEmpty(data.km)) {
    errors.km = "Husk å legge inn kilometerstand";
  }

  if (isEmpty(data.Oilcost)) {
    errors.Oilcost = "Du har glemt å legge inn hvor mye dette kostet !!";
  }
  if (isEmpty(data.sumLiterOil)) {
    errors.sumLiterOil =
      "Ta nå med hvor mange liter du fylte på av olje TA DEG SAMMEN";
  }

  console.log(errors);
  return {
    errors,
    isValid: isEmpty(errors)
  };
}
