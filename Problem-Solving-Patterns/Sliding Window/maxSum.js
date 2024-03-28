const maxSum = (array, n) => {
  let maxSum = 0;
  let tempSum = 0;
  if (array.length < n) return null;
  for (let index = 0; index < num; index++) {
    maxSum += array[index];
  }
  tempSum = maxSum;

  for (let index = num; index < array.length; index++) {
    tempSum = tempSum - arr[index - num] + arr[index];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};

console.log(maxSum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
