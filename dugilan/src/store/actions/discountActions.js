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
    if (data.message === "EXPIRED") {
      dispatch({
        type: "EXPIRED",
        payload: {
          error: {
            status: true,
            message:
              "This coupon has expired. Please try another one or subscribe to Dugilan to get the lastest coupons.",
          },
        },
      });
      return;
    }
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
    dispatch({ type: "APPLY_CODE", payload: { data: data.discountCode } });
  } catch (error) {
    console.log(error);
  }
};
export const resetDiscountErrors = () => async (dispatch) => {
  dispatch({ type: "RESET_ERROR" });
};
