function binarySearch(list, target) {
  if (list.length === 0) return new Error("List is empty");
  if (target === undefined || target === null)
    return new Error("please add a target");
  let left = 0;
  let right = list.length-1
  while(left<=right){
    let mid = Math.floor((left+right)/2)
    if(list[mid]===target){
        return true
    } else if(left[mid]>target){
        right = mid-1
    } else{
        left = mid+1
    }
  }
  return false
}

let sortedList = [1, 2, 3, 4, 5, 15, 20, 25, 100];
console.log(binarySearch(sortedList, 21));
console.log(binarySearch(sortedList, 20));
