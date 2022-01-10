import {
  getRequest,
  postRequest,
  deleteRequest,
  updateRequest,
} from "../../api/requests";
import { cartURL } from "../../components";
export const getCart = (currentUser) => async (dispatch) => {
  try {
    const { data } = await getRequest(
      {
        requestParams: { username: currentUser },
      },
      cartURL
    );
    dispatch({
      type: "FETCH_ALL",
      payload: {
        data,
        error: {
          status: false,
          message: "",
        },
      },
    });
  } catch (error) {
    console.log(error);
  }
};
export const addItemToCart = (body) => async (dispatch) => {
  try {
    if (!body.username) {
      dispatch({
        type: "NOT_LOGGED_IN",
        payload: {
          error: {
            status: true,
            message: "Please log in to add items to your cart.",
          },
        },
      });
      return;
    }
    const { data } = await postRequest(cartURL, body);
    if (data?.message === "ITEM_EXISTS") {
      dispatch({
        type: "ITEM_EXISTS",
        payload: {
          error: {
            status: true,
            message: "Item already in cart.",
          },
        },
      });
      return;
    }
    dispatch({
      type: "CREATE",
      payload: {
        data,
        error: {
          status: false,
          message: "",
        },
      },
    });
  } catch (error) {
    console.log(error);
  }
};
export const deleteItemFromCart = (id) => async (dispatch) => {
  try {
    const data = await deleteRequest(cartURL, id);
    dispatch({
      type: "DELETE",
      payload: {
        data,
        error: {
          status: false,
          message: "",
        },
      },
    });
  } catch (error) {
    console.log(error);
  }
};
export const resetItemExistsError = () => (dispatch) => {
  try {
    dispatch({
      type: "RESET_ERROR",
    });
  } catch (error) {
    console.log(error);
  }
};
export const increaseItemQuantity = (item) => async (dispatch) => {
  try {
    const data = await updateRequest(cartURL, item, "INCREASE");
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: {
        data,
        error: {
          status: false,
          message: "",
        },
      },
    });
  } catch (error) {
    console.log(error);
  }
};
export const decreaseItemQuantity = (item) => async (dispatch) => {
  if (item.quantity === 1) {
    dispatch({
      type: "DELETE",
      payload: {
        data: [item],
        error: {
          status: false,
          message: "",
        },
      },
    });
    return;
  }
  const data = await updateRequest(cartURL, item, "DECREASE");
  dispatch({
    type: "DECREASE_QUANTITY",
    payload: {
      data,
      error: {
        status: false,
        message: "",
      },
    },
  });
};
