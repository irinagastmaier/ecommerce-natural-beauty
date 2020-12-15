const initialState = { cart: [], total: 0, quantity: 0};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
        total: state.total += parseFloat(action.payload.price),
        quantity: state.quantity += 1
      };
    case "REMOVE_CART_ITEM":
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id),
        total: state.total = parseFloat(state.total) - parseFloat(action.payload.price),
        quantity: state.quantity -= 1
      };
    case "CHECKOUT":
      return {
        initialState,
      };
    default:
      return state;
  }
};
