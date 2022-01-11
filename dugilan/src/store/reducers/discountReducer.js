const initialState = {
  code: "",
  discount: 0,
  error: {
    status: false,
    message: "",
  },
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "APPLY_CODE":
      const { data } = action.payload;
      return {
        code: data.code,
        discount: data.discount,
        error: state.error,
      };
    case "NOT_FOUND":
      return {
        code: initialState.code,
        discount: initialState.discount,
        error: {
          status: action.payload.error?.status,
          message: action.payload.error?.message,
        },
      };
    case "EXPIRED": {
      return {
        code: initialState.code,
        discount: initialState.discount,
        error: {
          status: action.payload?.error?.status,
          message: action.payload?.error?.message,
        },
      };
    }
    case "RESET_ERROR":
      return {
        code: state.code,
        discount: state.discount,
        error: {
          status: false,
          message: "",
        },
      };
    default:
      return {
        code: state.code,
        discount: state.discount,
        error: state.error,
      };
  }
};
export default reducer;
