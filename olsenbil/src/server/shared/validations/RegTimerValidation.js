import isEmpty from "lodash/isEmpty";

export default function isValidalidInputRegTimer(data) {
  let errors = {};
  let isValid = true;
  console.log("Data fra validator funksjon", data);
  if (isEmpty(data.date)) {
    errors.date = "Dato feltet er obligatorisk";
  }

  if (isEmpty(data.Departure)) {
    errors.Departure = "Avreise feltet er obligatorisk";
    console.log(
      "Sjekk av isEmpty fra regvalidering " + isEmpty(data.Departure)
    );
  }

  if (isEmpty(data.Arrival)) {
    errors.Arrival = "Hjemkomst feltet er obligatorisk";
  }
  if (isEmpty(data.sumHour)) {
    errors.sumHour = "Antall timer feltet er obligatorisk";
  }

  if (isEmpty(data.Description)) {
    errors.Description = "Beskrivelse feltet er obligatorisk";
  }
  if (isEmpty(data.sumPayment)) {
    errors.sumPayment =
      "Sum av utlegg er obligatorisk Sett 0 hvis du ikke har lagt ut noe";
  }
  console.log(errors);
  return {
    errors,
    isValid: isEmpty(errors)
  };
}

//sumPayment
