function secondLargest(arr) {
  if (arr.length < 2) return null; // No second largest
  let largest = -Infinity;
  let second = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      second = largest;
      largest = arr[i];
    } else if (arr[i] > second && arr[i] !== largest) {
      second = arr[i];
    }
  }

  return second;
}
console.log(secondLargest(arr));