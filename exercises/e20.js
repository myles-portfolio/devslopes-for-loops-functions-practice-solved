
// EXERCISE 20
// Return an array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
// NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.

export function separateNamesWithAFromRest(array) {
  const arr1 = [];
  const arr2 = [];

  for (let i = 0; i < array.length; i++) {
    let name = array[i];
    let letter = 'a';
    let hasLetter = false;
    
    for (let n = 0; n < name.length; n++) {
    if (name.charAt(n) === letter) {
        hasLetter = true;
        break;
      }
    }
    if (hasLetter) {
      arr1.push(array[i]);
    } else {
        arr2.push(array[i]);
    }
  }
  return [arr1, arr2];
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
