import React from 'react';
import ReactApexChart from 'react-apexcharts';

import { defaultConfig } from '../../utils/chartDefaultConfig';

import './style.css';

const Chart = () => {
  return (
    <div className='chart'>
      <ReactApexChart options={defaultConfig.options} series={defaultConfig.series} type='candlestick' height={350} />
    </div>
  );
};

export default Chart;
