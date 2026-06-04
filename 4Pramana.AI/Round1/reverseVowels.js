const reverseVowels = (str) => {
  let left = 0;
  let right = str.length - 1;
  let dupStr = [...str];
  const vowels = ["a", "e", "i", "o", "u"];
  while (left <= right) {
    if (vowels.includes(dupStr[left]) && vowels.includes(dupStr[right])) {
      let temp = dupStr[left];
      dupStr[left] = dupStr[right];
      dupStr[right] = temp;
    }
    left++;
    right--;
  }
  return dupStr.join("");
};
console.log(reverseVowels("fronutend"));
