import isEmpty from "lodash/isEmpty";

export default function isValidalidInputRegMaintenance(data) {
  let errors = {};
  let isValid = true;

  if (isEmpty(data.date)) {
    errors.date = "Dato feltet er obligatorisk";
  }

  if (isEmpty(data.km)) {
    errors.km = "Husk å legge inn kilometerstand ikke bare 9999999";
  }

  if (isEmpty(data.Description)) {
    errors.Description = "En liten beskrivelse er flott :-)";
  }
  if (isEmpty(data.price)) {
    errors.price = "Priswen må du legge inn hvis du vil holde oversikt";
  }

  if (isEmpty(data.regNumber)) {
    errors.regNumber =
      "Reg nummer er viktig hvis du vil vite hvilken bil du har kostet på";
  }

  console.log(errors);
  return {
    errors,
    isValid: isEmpty(errors)
  };
}
