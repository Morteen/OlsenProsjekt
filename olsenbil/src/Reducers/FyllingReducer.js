import { REG_REFULING, REG_OILFILLING } from "../Client/actions/types";

const initialState = {
  myFulingRecords: [
    {
      regNumber: "",
      km: "",
      totalPrice: "",
      sumLiterFuel: ""
    }
  ],
  OilFilling: [
    {
      regNumber: "",
      km: "",
      Oilcost: "",
      sumLiterOil: ""
    }
  ]
};

export default function(state = initialState, action) {
  console.log("FyllingReducer initialstate: ", state, action);

  switch (action.type) {
    case REG_REFULING:
      console.log("ReFuelingReducer svarer " + JSON.stringify(action.payload));
      console.log("Log av state " + JSON.stringify(state.myFulingRecords));
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
        ...state
      };
  }
}
