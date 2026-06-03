const sum = (a,b,c) => a+b+c

function curry(callback){
  return function curried(...args){
    if(args.length>=callback.length){
     return callback(...args)
    }
    return function(...nextArgs){
     return curried(...args, ...nextArgs)
    }
  }
}

const curriedSum = curry(sum)
console.log(curriedSum(1,2,3));
console.log(curriedSum(1,2)(3));
console.log(curriedSum(1)(2)(3));



