const areThereDuplicates = (...args) => {
  let store = {};
  for (const item of args) {
    if (store[item]) return true;
    if (!store[item]) store[item] = true;
  }
  return false;
};

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
