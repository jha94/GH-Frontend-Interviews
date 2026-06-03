const reverseVowels = (str) => {
  const dupStr = str.split('');
  let left = 0;
  let right = dupStr.length - 1;
  const vowelArr = ["a", "e", "i", "o", "u"];
  while (left <= right) {
    if (vowelArr.includes(dupStr[left]) && vowelArr.includes(dupStr[right])) {
      const temp = dupStr[left];
      dupStr[left] = dupStr[right];
      dupStr[right] = temp;
    }
    left++;
    right--;
  }
  console.log(dupStr.join(''));
};
reverseVowels("frontend");
