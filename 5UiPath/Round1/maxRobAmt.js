function getMaxRobAmt(listOfHouses = []) {
  let evenSum = 0;
  let oddSum = 0;
  for (let index = 0; index < listOfHouses.length; index++) {
    if (index % 2 === 0) {
      evenSum += listOfHouses[index];
    } else {
      oddSum += listOfHouses[index];
    }
  }
  return Math.max(evenSum, oddSum);
}
console.log(getMaxRobAmt([1, 2, 3, 1]));
console.log(getMaxRobAmt([2, 7, 9, 3, 1]));
