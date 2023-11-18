// Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
// cannot use additional data structures?

let string = "abcdea"; // false

// brute force T=O(n2) & S=O(1)
function isUniqueBF(string) {
  for (let i = 0; i < string.length; i++) {
    let letter = string[i];

    for (let j = i + 1; j < string.length; j++) {
      let letter2 = string[j];
      if (letter === letter2) return false;
    }
  }
  return true;
}

// sort then traverse T=O(nlogn) & S=O(1)
function isUniqueSort(string) {
  string = string.split("");
  string.sort((a, b) => a - b);

  for (let i = 0; i < string.length - 1; i++) {
    let letter1 = string[i];
    let letter2 = string[i + 1];

    if (letter1 === letter2) return false;
  }
  return true;
}

// hashmap T=O(n) & S=O(n)
function isUniqueHash(string) {
  let hash = {};
  for (let char of string) {
    if (hash[char]) return false;
    hash[char] = true;
  }
  return true;
}

// ascii table T=O(n) S=O(1)
function isUniqueASCII(string) {
  let isAsciiUnique = Array(128).fill(false);

  for (let char in string) {
    if (isAsciiUnique[string.charCodeAt(char)]) return false;

    isAsciiUnique[string.charCodeAt(char)] = true;
  }
  return true;
}

// Test cases

// Test Case 1: Unique Characters
console.assert(isUniqueASCII("abcdef") === true, "Test Case 1 Failed");

// Test Case 2: All Same Characters
console.assert(isUniqueASCII("aaaaaa") === false, "Test Case 2 Failed");

// Test Case 3: Mixed Characters with Duplicates
console.assert(isUniqueASCII("Hello, world!") === false, "Test Case 3 Failed");
