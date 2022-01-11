import { getRequest } from "../../api/requests";
import { discountURL } from "../../components/index";
export const getDiscountCode = (code) => async (dispatch) => {
  try {
    const { data } = await getRequest(
      {
        requestParams: { code },
      },
      discountURL
    );
    if (data.message === "NOT_FOUND") {
      dispatch({
        type: "NOT_FOUND",
        payload: {
          error: {
            status: true,
            message: "Discount code not available",
          },
        },
      });
      return;
    }
    console.log(data);
    dispatch({ type: "APPLY_CODE", payload: { data } });
  } catch (error) {
    console.log(error);
  }
};
