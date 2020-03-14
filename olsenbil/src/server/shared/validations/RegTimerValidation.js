import isEmpty from "lodash/isEmpty";

export default function isValidalidInputRegTimer(data) {
  let errors = {};
  let isValid = true;
  console.log("Data fra validator funksjon", data);
  if (isEmpty(data.date)) {
    errors.date = "Dato feltet er obligatorisk";
  }

  if (isEmpty(data.timeDeparture)) {
    errors.timeDeparture = "Avreise feltet er obligatorisk";
    console.log(
      "Sjekk av isEmpty fra regvalidering " + isEmpty(data.Departure)
    );
  }

  if (isEmpty(data.timeArrival)) {
    errors.timeArrival = "Hjemkomst feltet er obligatorisk";
  }
  if (isEmpty(data.HourCount)) {
    errors.HourCount = "Antall timer feltet er obligatorisk";
  }

  if (isEmpty(data.Description)) {
    errors.Description = "Beskrivelse feltet er obligatorisk";
  }
  if (isEmpty(data.outlayPayment)) {
    errors.outlayPayment =
      "Sum av utlegg er obligatorisk Sett 0 hvis du ikke har lagt ut noe";
  }
  console.log(errors);
  return {
    errors,
    isValid: isEmpty(errors)
  };
}

//sumPayment
