import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from "constants/wishlistConstants";

export const wishlistReducer = (state = { wishlist: [] }, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      const item = action.payload;
      const isItemExist = state.wishlist.find(
        wishlistItem => wishlistItem._id === item._id
      );

      if (isItemExist) {
          return {
              ...state,
              wishlist: [...state.wishlist],
            };
        } else {
        return {
          ...state,
          wishlist: [...state.wishlist, item],
        };
      }

    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlist: state.wishlist.filter(
          (wishlistItem) => wishlistItem._id !== action.payload
        ),
      };

    default:
      return state;
  }
};
