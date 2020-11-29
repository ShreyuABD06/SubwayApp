import {
  ADD_TO_CART,
  ON_RADIO_VALUE_CHANGE,
  ON_ADDON_CHANGE,
  ON_OPTIONAL_CHANGE,
  SET_INITIAL_STATE,
  SET_ADDON_COST
} from "./CartActionsTypes";

export const addToCart = data => {
  return {
    type: ADD_TO_CART,
    payload: data
  };
};

export const onRadioValueChange = (target, value) => {
  return {
    type: ON_RADIO_VALUE_CHANGE,
    target: target,
    value: value
  };
};

export const onAddonItemsChange = data => {
  debugger;
  return {
    type: ON_ADDON_CHANGE,
    payload: data
  };
};

export const onOptionalItemsChange = data => {
  debugger;
  return {
    type: ON_OPTIONAL_CHANGE,
    payload: data
  };
};

export const setInitalState = (cheeseType, vegType, chipsType, totalCost) => {
  return {
    type: SET_INITIAL_STATE,
    cheeseType: cheeseType,
    vegType: vegType,
    chipsType: chipsType,
    price: totalCost
  };
};

export const setAddonCost = data => {
  return {
    type: SET_ADDON_COST,
    payload: data
  };
};
