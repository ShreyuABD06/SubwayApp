import {
  ADD_TO_CART,
  ON_RADIO_VALUE_CHANGE,
  SET_INITIAL_STATE,
  ON_ADDON_CHANGE,
  ON_OPTIONAL_CHANGE,
  SET_ADDON_COST
} from "../Actions/Cart/CartActionsTypes";

const initialState = {
  cheeseType: "",
  chipsType: "",
  vegType: "",
  totalCost: 0,
  addonCost: 0,
  addons: [],
  options: [],
  cart: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cart: action.payload,
        showModal: 0,
        addonCost: 0,
        addons: [],
        options: []
      };
    }
    case ON_RADIO_VALUE_CHANGE: {
      switch (action.target) {
        case "cheeseType":
          return {
            ...state,
            cheeseType: action.value
          };
        case "vegType":
          return {
            ...state,
            vegType: action.value
          };
        case "chipsType":
          return {
            ...state,
            chipsType: action.value
          };
      }
    }
    case ON_ADDON_CHANGE: {
      debugger;
      return {
        ...state,
        addons: action.payload
      };
    }
    case ON_OPTIONAL_CHANGE: {
      debugger;
      return {
        ...state,
        options: action.payload
      };
    }
    case SET_INITIAL_STATE: {
      return {
        ...state,
        cheeseType: action.cheeseType,
        vegType: action.vegType,
        chipsType: action.chipsType,
        totalCost: action.price
      };
    }
    case SET_ADDON_COST: {
      return {
        ...state,
        addonCost: action.payload
      };
    }
    default:
      return state;
  }
}
