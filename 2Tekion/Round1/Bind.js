const obj = {
  name: "Gourav",
  methodOne: function () {
    console.log("method1 Running");
  },
};
function test(age) {
  console.log(this.name, age);
}

Function.prototype.bindPoly = function(context={}, ...args){
  if(typeof context!=='object'){
    return 'context must be object'
  }
  context.fn = this
  return function(...nextArgs){
    return context.fn(...args, ...nextArgs)
  }
}

const res = test.bindPoly(obj);
res(30);
