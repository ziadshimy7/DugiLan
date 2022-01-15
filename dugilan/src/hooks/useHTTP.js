import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useHTTP = (url, requestHeader = {}, requestParams = "") => {
  const [templates, setTemplates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getRequest = useCallback(async () => {
    const data = await axios.get(url, {
      headers: { Authorization: requestHeader },
      params: requestParams,
    });
    return data.data;
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
    const loadTemplates = async () => {
      try {
        setIsLoading(true);
        const data = await getRequest();
        console.log(data);
        setTemplates(data.matches);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    loadTemplates();
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
