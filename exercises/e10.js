// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  let arr = [];

  for (let i = 0; i < array.length; i++) {
    let accountHolderName = array[i].name;
    let lowercaseAccountHolderName = accountHolderName.toLowerCase();
    
    if(lowercaseAccountHolderName.includes(letter)) {
			arr.push(accountHolderName);
    } 
  }
  
 return arr; 

}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
