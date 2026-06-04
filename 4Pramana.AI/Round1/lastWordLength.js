const getLastWordLength = (string) => {
  let lastWord = "";
  for (let index = string.trim("").length; index >= 0; index--) {
    if (string[index] !== " ") {
      lastWord += string[index];
    } else {
      break;
    }
  }
  console.log(lastWord.length);
};
getLastWordLength(" Hello  Worlokd      ");
