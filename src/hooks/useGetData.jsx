import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

import { downloadCSV } from '../api/endpoints';
import { convertCsvToArray } from '../utils/convertCSVtoArray';
import { useSearchParams } from 'react-router-dom';

const useGetData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams] = useSearchParams();

  const getData = useCallback(async () => {
    setLoading(true);
    try {
      const currentParams = Object.fromEntries([...searchParams]);
      const res = await axios.get(downloadCSV(currentParams));
      const myData = convertCsvToArray(res.data); // to convert the data from text to the chape which the chart can read
      setError(null); // to remove error message if the request success
      setData(myData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [searchParams]);

  useEffect(() => {
    getData();
  }, [getData, searchParams]);

  return { data, loading, error };
};

export default useGetData;
