const averagePair = (array, result) => {
  if (Math.max(array) < result || array.length < 2) return false;

  const arrayHalf = Math.ceil(array.length / 2);
  const lowerHalf = array.splice(0, arrayHalf);

  let lowerHalfIndex = lowerHalf.length - 1;
  for (let index = 0; index < array.length; index++) {
    const currResult = (lowerHalf[lowerHalfIndex] + array[index]) / 2;
    if (currResult === result) return true;
    if (currResult > result) {
      lowerHalfIndex--;
      index = 0;
    }
  }
  return false;
};

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
