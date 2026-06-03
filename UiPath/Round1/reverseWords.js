const reverseWords = (strings) => {
    return strings.split(' ').map((str)=>{
        return str.split('').reverse().join('')
    }).join(' ')
}

console.log(reverseWords("Welcome to UiPath"))