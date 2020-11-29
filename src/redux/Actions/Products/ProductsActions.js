import {
  SAY_REDUX_WORKING,
  MODAL_CLOSE,
  ADD_TO_CART
} from "./ProductsActionTypes";

export const sayReduxWorking = id => {
  return {
    type: SAY_REDUX_WORKING,
    payload: id
  };
};

export const closeModal = () => {
  return {
    type: MODAL_CLOSE
  };
};

export const addItemToCart = item => {
  debugger;
  return {
    type: ADD_TO_CART,
    payload: item
  };
};
