const person = {
  name: "Prashant",
  address: {
    state: "Bihar",
  },
};
function deepclone(obj, visited = new WeakMap()) {
  if (obj === null || typeof obj !== "object") return obj;
  if (visited.has(obj)) return visited.get(obj);

  let result = Array.isArray(obj) ? [] : {};
  visited.set(obj, result)
  for (let [key, value] of Object.entries(obj)) {
    result[key] = deepclone(value, visited);
  }
  return result;
}
const person2 = deepclone(person);
person2.address.state = "delhi";
console.log(person);
console.log(person2);
