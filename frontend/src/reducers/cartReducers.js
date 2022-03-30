import { ADD_TO_CART, REMOVE_ITEM_CART } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;

      const isItemExist = state.cartItems.find(
        i => i.id === item.id
      );

      if (isItemExist) {
        return {
          ...state,
          cartItems: state.cartItems.map(i =>
            i.id === isItemExist.id ? {...i, quantity: i.quantity+1} : i
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, {...item, quantity:1}],
        };
      }

    case REMOVE_ITEM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i.id !== action.payload),
      };


    default:
      return state;
  }
};
