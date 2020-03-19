import {
  REG_REFULING,
  REG_OILFILLING,
  REG_ADBLUEFILLING,
  FETCH_STATS
} from "../Client/actions/types";

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
  ],
  AdblueFilling: [
    {
      regNumber: "",
      km: "",
      AdblueCost: "",
      sumLiterAdblue: ""
    }
  ],
  MyStats: {
    regNumber: "",
    Sumkm: "",
    TotalSum: 0
  },
  newStats: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REG_REFULING:
      console.log("ReFuelingReducer svarer " + JSON.stringify(action.payload));
      console.log("Log av state " + JSON.stringify(state.myFulingRecords));
      return {
        ...state,
        myFulingRecords: state.myFulingRecords.concat(action.payload),
        TotalSum: (state.MyStats.TotalSum =
          state.MyStats.TotalSum + parseInt(action.payload.totalPrice))

        //Legger inn i listen over fylling av drivstoff
      };
    case REG_OILFILLING:
      return {
        ...state,
        OilFilling: state.OilFilling.concat(action.payload), //Legger inn i listen over fylling av olje
        TotalSum: (state.MyStats.TotalSum =
          state.MyStats.TotalSum + parseInt(action.payload.Oilcost))
      };
    case REG_ADBLUEFILLING:
      return {
        ...state,
        AdblueFilling: state.AdblueFilling.concat(action.payload) //Legger inn i listen over fylling av Adblue
      };
    case FETCH_STATS: {
      console.log("Log av FETCH_STATS" + JSON.stringify(state.MyStats));
      action.payload = state.MyStats;
      return {
        ...state,
        newStats: state.MyStats
      };
    }

    default:
      return {
        ...state
      };
  }
}
