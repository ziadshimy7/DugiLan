const initialState = {
  code: "",
  discount: 0,
  error: { status: false, message: "" },
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "APPLY_CODE":
      console.log(action.payload.data);
      return {
        code: action.payload.data[0].code,
        discount: action.payload.data[0].discount,
        error: state.error,
      };
    case "NOT_FOUND":
      return {
        code: initialState.code,
        discount: initialState.discount,
        error: {
          status: action.payload.error.status,
          message: action.payload.error.message,
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
