import {
  SAY_REDUX_WORKING,
  MODAL_CLOSE,
  ADD_TO_CART
} from "../Actions/Products/ProductsActionTypes";

const initialState = {
  allIds: [],
  byIds: {},
  myMessage: "Hello Redux Working",
  showModal: 0,
  cart: [],
  totalCost: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SAY_REDUX_WORKING: {
      return {
        ...state,
        myMessage: "Redux Has to work",
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
