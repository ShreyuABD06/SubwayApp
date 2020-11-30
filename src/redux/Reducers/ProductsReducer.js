import {
  OPEN_MODAL,
  MODAL_CLOSE,
  ADD_TO_CART
} from "../Actions/Products/ProductsActionTypes";

const initialState = {
  allIds: [],
  byIds: {},
  showModal: 0,
  cart: [],
  totalCost: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL: {
      return {
        ...state,
        showModal: action.payload
      };
    }
    case MODAL_CLOSE: {
      return {
        ...state,
        showModal: 0
      };
    }
    case ADD_TO_CART: {
      return {
        ...state,
        cart: [...state.cart, action.payload],
        showModal: 0
      };
    }
    default:
      return state;
  }
}
