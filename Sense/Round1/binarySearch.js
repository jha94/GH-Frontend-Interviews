function binarySearch(list, target) {
  let left = 0;
  let right = list.length - 1;
  while (left <= right) {
    let mid = Math.min((left + right) / 2);
    if (list[mid] === target) {
      return true;
    } else if (list[mid] > target) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}
let sortedList = [1, 2, 3, 4, 5, 15, 20, 25, 100];
console.log(binarySearch(sortedList, 20));
