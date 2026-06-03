let SAMPLE_DATA = [[3, 4, 2, 5, 2, 8],[1, 2, 3, 2], [2, 5, 1, 7, 1]];

function getNumberFrequency(input_Data = []) {
  const result = {};
  input_Data
    .flat()
    .sort((a, b) => a - b)
    .forEach((value) => {
      if (result[value]) {
        result[value] = result[value] + 1;
      } else {
        result[value] = 1;
      }
    });
  return result;
}
console.log(getNumberFrequency(SAMPLE_DATA));
