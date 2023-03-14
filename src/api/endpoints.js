import { API_URL } from '.';

export const downloadCSV = ({ period1, period2, interval }) =>
  `${API_URL}/finance/download/SPUS?period1=${period1}&period2=${period2}&interval=${interval}&events=history&crumb=5YTX%2FgVGBmg`;
