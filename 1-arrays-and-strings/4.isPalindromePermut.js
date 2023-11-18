// Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palin-
// drome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation

// is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
// EXAMPLE
// Input: Tact Coa
// Output: True (permutations: "taco cat". "atco cta". etc.)

// use hashMap to store the number of letter and checking the number of odd iterations to be 1 or 0 depending of the length
// an optimisation could be to check for the number of odds during the first for loop so we dont have to map it over again
// still is O(n) but small opti
// even more opti could be to only use a number and not a map because we dont need to know the cound, just to know the number of odd;
function ispalindromePermut(string) {
  let countLetters = new Map();
  let count = 0;

  string = string.toLowerCase();

  for (let char of string) {
    if (char === " ") continue;
    if (countLetters.get(char))
      countLetters.set(char, countLetters.get(char) + 1);
    else countLetters.set(char, 1);
    count++;
  }

  const isOdd = count % 2 !== 0;

  if (isOdd) {
    return verifyIsOdd(countLetters);
  } else {
    return verifyIsEven(countLetters);
  }
}

function verifyIsOdd(countLetters) {
  let isOddPassed = false;
  for (let [key, value] of countLetters) {
    if (value % 2 === 0) continue;
    else {
      if (isOddPassed) return false;
      isOddPassed = true;
    }
  }
  return true;
}
function verifyIsEven(countLetters) {
  for (let [key, value] of countLetters) {
    if (value % 2 === 0) continue;
    else {
      return false;
    }
  }
  return true;
}

// tests
console.assert(ispalindromePermut("Tact Coa") === true, "test1");
console.assert(ispalindromePermut("Tact Coaa") === false, "test2");
console.assert(ispalindromePermut("caca") === true, "test3");
