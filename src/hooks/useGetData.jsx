import React, { useEffect } from 'react';
import axios from 'axios';

import { downloadCSV } from '../api/endpoints';
import { convertCsvToArray } from '../utils/convertCSVtoArray';

const useGetData = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const getData = React.useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get(downloadCSV({ period1: '1633381200', period2: '1664917199', interval: '1mo' }));
      const myData = convertCsvToArray(res.data); // to convert the data from text to the chape which the chart can read
      setError(null); // to remove error message if the request success
      setData(myData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return { data, loading, error };
};

export default useGetData;
