import React, { useMemo } from 'react';
import ReactApexChart from 'react-apexcharts';

// utils
import { defaultOptions } from '../../utils/chartDefaultOptions';

// hooks
import useGetData from '../../hooks/useGetData';

import './style.css';

const Chart = () => {
  const { data, loading, error } = useGetData();

  const series = useMemo(
    () => [
      {
        name: 'candle',
        data,
      },
    ],
    [data]
  );

  return (
    <div className='chart'>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <p className='error_message'>{error}</p>
      ) : (
        <ReactApexChart options={defaultOptions} series={series} type='candlestick' height={350} />
      )}
    </div>
  );
};

export default Chart;
