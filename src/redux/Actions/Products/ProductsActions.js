import { OPEN_MODAL, MODAL_CLOSE, ADD_TO_CART } from "./ProductsActionTypes";

export const openProductModal = id => {
  return {
    type: OPEN_MODAL,
    payload: id
  };
};

export const closeModal = () => {
  return {
    type: MODAL_CLOSE
  };
};

export const addItemToCart = item => {
  return {
    type: ADD_TO_CART,
    payload: item
  };
};
