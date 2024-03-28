const sameFrequency = (num1, num2) => {
  const store = {};
  const num1String = String(num1);
  const num2String = String(num2);

  if (num1String.length !== num2String.length) return false;

  for (const value of num1String) {
    if (store[value]) store[value]++;
    if (!store[value]) store[value] = 1;
  }

  for (const value of num2String) {
    if (!store[value]) return false;
    if (store[value] === 0) return false;
    if (store[value]) store[value]--;
  }
  return true;
};

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
