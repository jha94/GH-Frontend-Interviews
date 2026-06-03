function maxRobAmount(houses){
    let oddHouseAmt = 0
    let evenHouseAmt = 0
    for(let index=0;index<houses.length;index++){
        if(index%2===0){
            evenHouseAmt+=houses[index]
        } else{
            oddHouseAmt+=houses[index]
        }
    }
    return Math.max(oddHouseAmt, evenHouseAmt)
}
console.log(maxRobAmount([2,7,9,3,1]))