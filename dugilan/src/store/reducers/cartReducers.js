const initialState = {
  cartItems: [],
  error: false,
  totalAmount: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return {
        cartItems: action.payload.data,
        error: action.payload.error,
        totalAmount: action.payload.data
          .map((item) => item.price)
          .reduce((acc, curr) => {
            return curr + acc;
          }, 0),
      };
    case "CREATE":
      return {
        cartItems: [...state.cartItems, action.payload.data],
        error: action.payload.error,
        totalAmount: state.totalAmount + action.payload.data.price,
      };

    case "DELETE":
      const removedItem = action.payload.data[0];
      return {
        cartItems: state.cartItems.filter(
          (item) => item._id !== removedItem._id
        ),
        error: action.payload.error,
        totalAmount: state.totalAmount - removedItem.price,
      };
    case "ITEM_EXISTS":
      return {
        cartItems: state.cartItems,
        error: action.payload.error,
        totalAmount: state.totalAmount,
      };
    case "RESET_ERROR":
      return {
        cartItems: state.cartItems,
        error: action.payload.error,
        totalAmount: state.totalAmount,
      };
    case "INCREASE_QUANTITY":
      const removedItemIndex = state.cartItems.indexOf(action.payload);
      const updatedItem = state.cartItems[removedItemIndex];
      updatedItem.quantity++;
      updatedItem.price *= updatedItem.quantity;

      return {
        cartItems: [
          ...state.cartItems.filter((item) => item._id !== action.payload._id),
          updatedItem,
        ],
        error: false,
      };
    case "DECREASE_QUANTITY":
      return;

    default:
      return state.cartItems;
  }
};
export default reducer;
