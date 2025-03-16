// EXERCISE 4
// Return the MIN and the MAX value in the given array of numbers
// findMinValueInArray([2, 45, 32, 3, 0, 46, 12]) => 0
// findMaxValueInArray([2, 45, 32, 3, 0, 46, 12]) => 46

export function findMinValueInArray(array) {
  // Your code goes here...
  let minVal = 0;
  for (let index in array) {
    if (!minVal && !Number(index)) {
      minVal = array[index];
    } else if (array[index] < minVal) {
      minVal = array[index];
    }
  }

  return minVal;
}

export function findMaxValueInArray(array) {
  // Your code goes here...
  let maxVal = 0;
  for (let index in array) {
    if (!maxVal && !Number(index)) {
      maxVal = array[index];
    } else if (array[index] > maxVal) {
      maxVal = array[index];
    }
  }

  return maxVal;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-4"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
