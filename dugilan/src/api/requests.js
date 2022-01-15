import axios from "axios";

export const getRequest = async (
  { requestParams = "", requestHeader = {} },
  url
) => {
  const data = await axios.get(url, {
    headers: requestHeader,
    params: requestParams,
  });
  return data;
};
export const postRequest = async (url, body) => {
  try {
    const response = await axios.post(url, body ? body : null);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const deleteRequest = async (url, id) => {
  try {
    const { data } = await axios.delete(url, {
      data: { id },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const updateRequest = async (url, item, method) => {
  try {
    const { data } = await axios.put(url, {
      id: item?._id,
      quantity: item?.quantity,
      method,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
console.log("Hi");
