export const convertCsvToArray = (data) =>
  data
    ?.split('\n') // split to lines
    .slice(1) // remove the head line before split the line
    .map(function (line) {
      const array = line.split(','); // slit every line to array of items
      return { x: array[0], y: array.slice(1, 5) }; // convert to the shape that the chart can read
    });
