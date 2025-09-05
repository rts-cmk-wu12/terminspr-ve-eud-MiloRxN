'use client';

// Taget fra tidligere projekt
import { useEffect, useState } from "react";

function useFetch(endpoint, baseUrl = 'http://localhost:4000/api/v1/') {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof (endpoint) !== 'string') {
      setError(new Error('Endpoint is not a string'));
      return;
    };

    if (typeof (baseUrl) !== 'string') {
      setError(new Error('BaseUrl is not a string'));
      return;
    };

    fetch(baseUrl + endpoint)
      .then(function (response) {
        if (response.status !== 200) {
          throw new Error('Endpoint not found');
        };
        return response.json();
      })
      .then(function (data) {
        setData(data);
      })
      .catch(function (error) {
        setError(error);
      })
      .finally(function () {
        setLoading(false);
      });

  }, [endpoint, baseUrl]);

  return { data, error, loading };
}

export default useFetch;