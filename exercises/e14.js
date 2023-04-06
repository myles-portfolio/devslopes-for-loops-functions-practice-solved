
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  let arr = [];

  for (let i = 0; i < array.length; i++) {
    const account = array[i];
    let depositSum = 0;
    let withdrawalSum = 0;

    if (account.deposits) {
      for (let d = 0; d < account.deposits.length; d++) {
        depositSum += account.deposits[d];
      }
    }

    if (account.withdrawals) {
      for (let w = 0; w < account.withdrawals.length; w++) {
        withdrawalSum += account.withdrawals[w];
      }
    }

    const expectedBalance = depositSum - withdrawalSum;
    if (account.balance !== expectedBalance) {
      arr.push(account);
    }
  }
  return arr; 
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
