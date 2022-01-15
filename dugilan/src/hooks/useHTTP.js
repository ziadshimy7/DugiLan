import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useHTTP = (url, requestHeader = {}, requestParams = "") => {
  const [templates, setTemplates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getRequest = useCallback(async () => {
    try {
      const data = await axios.get(url, {
        headers: { Authorization: requestHeader },
        params: requestParams,
      });
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }, [url, requestHeader, requestParams]);
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
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const data = await getRequest();
        setTemplates(data.matches);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [url, getRequest]);
  return {
    postRequest,
    deleteRequest,
    templates,
    isLoading,
    setIsLoading,
  };
};

export default useHTTP;
