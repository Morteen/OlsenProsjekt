import isEmpty from "lodash/isEmpty";

export default function isValidalidInputRegTimer(data) {
  let errors = {};
  let isValid = true;
  console.log("Data fra validator funksjon", data);

  if (isEmpty(data.mobile)) {
    errors.mobile = "Mobil feltet er obligatorisk";
  }
  if (isEmpty(data.date)) {
    errors.date = "Dato feltet er obligatorisk";
  }

  if (isEmpty(data.fromTime)) {
    errors.fromTime = "Avreise feltet er obligatorisk";
    console.log(
      "Sjekk av isEmpty fra regvalidering " + isEmpty(data.Departure)
    );
  }

  if (isEmpty(data.toTime)) {
    errors.toTime = "Hjemkomst feltet er obligatorisk";
  }
  if (isEmpty(data.ordinaryHours)) {
    errors.ordinaryHours = "ordinære timer feltet er obligatorisk";
  }

  if (isEmpty(data.description)) {
    errors.description = "Beskrivelse feltet er obligatorisk";
  }
  if (isEmpty(data.tripDays)) {
    errors.tripDays = "Antall dager er påkrevd ";
  }
  console.log(errors);
  return {
    errors,
    isValid: isEmpty(errors)
  };
}

/**mobile: 40042106,
      date: "2020-02-02T00:00:00",
      fromTime: "23:30:00",
      toTime: "08:30:00",
      description: "Valestrand marina. Storfjord",
      ordinaryHours: "0",
      fiftyProcentHours: "0",
      hundredProcentHours: "8",
      tripDays: 0,
      bankedTime: "",
      timeOffInLieu: "",
      registeredTime: "2020-02-04T00:35:59.17" */
