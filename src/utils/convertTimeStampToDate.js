export const convertTimeStampToDate = (timestamp) => {
  const now = new Date(Number(timestamp + '000'));
  const day = ('0' + now.getDate()).slice(-2);
  const month = ('0' + (now.getMonth() + 1)).slice(-2);

  return now.getFullYear() + '-' + month + '-' + day;
};
