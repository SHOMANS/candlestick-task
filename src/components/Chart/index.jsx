import React, { useMemo } from 'react';
import ReactApexChart from 'react-apexcharts';

import { defaultOptions } from '../../utils/chartDefaultConfig';

import { CSVText, smallCSVText } from '../../mock/SPUS';

import './style.css';
import { convertCsvToArray } from '../../utils/convertCSVtoArray';

const Chart = () => {
  const data = convertCsvToArray(smallCSVText);

  console.log(data);

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
      <ReactApexChart options={defaultOptions} series={series} type='candlestick' height={350} />
    </div>
  );
};

export default Chart;
