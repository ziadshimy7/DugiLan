import axios from "axios";
import { useCallback } from "react";

const useHTTP = (url, setState) => {
  const getRequest = useCallback(
    async ({ requestParams = "", requestHeader = {} }) => {
      const data = await axios.get(url, {
        headers: requestHeader,
        params: requestParams,
      });
      setState(data.data);
    },
    [setState, url]
  );
  const postRequest = useCallback(
    async (body) => {
      try {
        const response = await axios.post(url, body ? body : null);
        console.log(response);
      } catch (error) {
        console.log(error.message, error.response.status);
      }
    },
    [url]
  );
  const deleteRequest = useCallback(
    async (id) => {
      try {
        await axios.delete(url, {
          data: { id },
        });
      } catch (error) {
        console.log(error);
      }
    },
    [url]
  );
  return {
    getRequest,
    postRequest,
    deleteRequest,
  };
};

export default useHTTP;
