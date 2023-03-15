export const inputsArray = [
  {
    name: 'interval',
    type: 'number',
    label: 'Interval',
    placeholder: 'Enter a number',
  },
  {
    name: 'type',
    type: 'select',
    label: 'Time',
    options: [
      { title: 'Month', value: 'mo' },
      { title: 'Week', value: 'wk' },
      { title: 'Day', value: 'd' },
    ],
  },
  {
    name: 'from',
    type: 'date',
    label: 'From',
  },
  {
    name: 'to',
    type: 'date',
    label: 'To',
  },
];
