// EXERCISE 11
// Return an array of withdrawal sums of each bank account.
// If the account doesn't have withdrawals, it's sum is 0.
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 0, 43242.34, 0, 23432]

export function getAllWithdrawals(array) {
  // Your code goes here...
  const sumOfWithDrawals = [];

  for (let item of array) {
    if (item.withdrawals != undefined) {
      let totalSum = 0;
      for (let withdrawals of item.withdrawals) {
        totalSum += withdrawals;
      }
      sumOfWithDrawals.push(totalSum);
    } else {
      sumOfWithDrawals.push(0);
    }
  }

  return sumOfWithDrawals;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
