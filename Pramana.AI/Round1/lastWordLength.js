const getLastWordLength = (string) => {
    const trimmed = string.trim();
    let str = ""
    for(let index = trimmed.length-1;index>=0;index--){
        if(trimmed[index]===' ') break
        str+=trimmed[index] 
    }
    return str.length
}
console.log(getLastWordLength(" Hello World    "))