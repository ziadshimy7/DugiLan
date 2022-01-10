const initialState = {
  cartItems: [],
  error: {
    status: false,
    message: "",
  },
  totalAmount: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return {
        cartItems: action.payload.data,
        error: action.payload.error,
        totalAmount: action.payload.data
          .map((item) => item.price * item.quantity)
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
      const removedItemTotalPrice = removedItem.price * removedItem.quantity;
      return {
        cartItems: state.cartItems.filter(
          (item) => item._id !== removedItem._id
        ),
        error: action.payload.error,
        totalAmount: state.totalAmount - removedItemTotalPrice,
      };
    case "ITEM_EXISTS":
      return {
        cartItems: state.cartItems,
        error: action.payload.error,
        totalAmount: state.totalAmount,
      };
    case "NOT_LOGGED_IN":
      return {
        cartItems: state.cartItems,
        error: action.payload.error,
        totalAmount: state.totalAmount,
      };
    case "RESET_ERROR":
      return {
        cartItems: state.cartItems,
        error: initialState.error,
        totalAmount: state.totalAmount,
      };
    case "INCREASE_QUANTITY":
      const currentItem = action.payload.data[0];
      const currentItemIndex = state.cartItems.findIndex(
        (item) => item._id === currentItem._id
      );
      const updatedItem = state.cartItems[currentItemIndex];
      updatedItem.quantity++;
      let updatedItems = [...state.cartItems];
      updatedItems[currentItemIndex] = updatedItem;
      const updatedTotalAmount = updatedItems
        .map((item) => item.price * item.quantity)
        .reduce((acc, curr) => {
          return curr + acc;
        }, 0);
      return {
        cartItems: updatedItems,
        error: false,
        totalAmount: updatedTotalAmount,
      };
    case "DECREASE_QUANTITY":
      return;

    default:
      return state.cartItems;
  }
};
export default reducer;
