import { REG_REFULING, REG_OILFILLING } from "../Client/actions/types";

const initialState = {
  OilFilling: [
    {
      regNumber: "",
      km: "",
      totalPrice: "",
      sumLiterFuel: ""
    }
  ],
  myFulingRecords: [
    {
      regNumber: "",
      km: "",
      totalPrice: "",
      sumLiterFuel: ""
    }
  ]
};

export default function(state = initialState, action) {
  console.log("FyllingReducer initialstate: ", state, action);
  console.log("ReFuelingReducer svarer " + JSON.stringify(action.payload));
  switch (action.type) {
    case REG_REFULING:
      return {
        ...state,
        myFulingRecords: state.myFulingRecords.concat(action.payload) //Legger inn i listen over fylling av drivstoff
      };
    case REG_OILFILLING:
      return {
        ...state,
        OilFilling: state.OilFilling.concat(action.payload) //Legger inn i listen over fylling av olje
      };

    default:
      return {
        myFulingRecords: state.myFulingRecords
      };
  }
}
