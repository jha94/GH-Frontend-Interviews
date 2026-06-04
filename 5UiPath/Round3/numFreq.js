let SAMPLE_DATA = [
  [1, 2, 3, 2],
  [2, 5, 1, 7, 1],
  [3, 4, 2, 5, 2, 8],
];

function getNumFreq(SAMPLE_DATA) {
  const flatArr = SAMPLE_DATA.flat();
  const freqObj = {};
  flatArr.forEach((value) => {
    if (freqObj[value]) {
      freqObj[value] = freqObj[value] + 1;
    } else {
      freqObj[value] = 1
    }
  });
  return freqObj;
}
console.log(getNumFreq(SAMPLE_DATA));
