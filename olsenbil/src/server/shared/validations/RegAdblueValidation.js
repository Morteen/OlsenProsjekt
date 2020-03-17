import isEmpty from "lodash/isEmpty";

export default function isValidalidInputAdblue(data) {
  let errors = {};
  let isValid = true;
  console.log("Data fra validator funksjon", data);
  if (isEmpty(data.regNumber)) {
    errors.regNumber = "Du må ha regnummer :-)";
  }

  if (isEmpty(data.km)) {
    errors.km = "Husk å legge inn kilometerstand";
  }

  if (isEmpty(data.AdblueCost)) {
    errors.AdblueCost = "Du har glemt å legge inn hvor mye dette kostet !!";
  }
  if (isEmpty(data.sumLiterAdblue)) {
    errors.sumLiterAdblue = "Ta nå med hvor mange liter du fylte på av Adblue";
  }

  console.log(errors);
  return {
    errors,
    isValid: isEmpty(errors)
  };
}
