import { useEffect, useState } from "react";
import axios from "axios";

function useApiCall(body, method, url, accessKey) {
  const [isLoading, setIsLoading] = useState(true);
  const [apiError, setApiError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const makeApiCall = async () => {
      setIsLoading(true);
      try {
        const response = await axios({
          method,
          url,
          data: body,
          headers: {
            Authorization: `Client-ID ${accessKey}` // Set access key as Authorization header
          }
        });
        setData(response.data);
      } catch (error) {
        setApiError(error);
      } finally {
        setIsLoading(false);
      }
    };

    makeApiCall();
  }, [body, method, url, accessKey]);

  return { isLoading, data, apiError };
}

export default useApiCall;
