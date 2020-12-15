const initialState = { productsArray: [], quantity: -1 };

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":  
      return {
        ...state,
        quantity: state.quantity + 1,
        productsArray: action.payload,
      };
    default:
      return state;
  }
};
