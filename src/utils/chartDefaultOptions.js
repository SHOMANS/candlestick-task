export const defaultOptions = {
  chart: {
    height: 350,
    type: 'candlestick',
  },
  title: {
    text: 'CandleStick Chart',
    align: 'center',
  },
  annotations: {
    xaxis: [
      {
        borderColor: '#00E396',
        label: {
          borderColor: '#00E396',
          style: {
            fontSize: '12px',
            color: '#fff',
            background: '#00E396',
          },
          orientation: 'horizontal',
          offsetY: 7,
        },
      },
    ],
  },

  yaxis: {
    tooltip: {
      enabled: true,
    },
  },
};
