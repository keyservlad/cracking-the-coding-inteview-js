// Check Permutation: Given two strings, write a method to decide if one is a permutation of the
// other.

// sort then compare
function checkPermutSort(string1, string2) {
  string1 = string1.split("");
  string2 = string2.split("");
  string1 = string1.sort((a, b) => a.localeCompare(b));
  string2 = string2.sort((a, b) => a.localeCompare(b));

  if (string1.join("") === string2.join("")) return true;
  return false;
}

// use hashmaps O(n) O(n)
function checkPermutHash(string1, string2) {
  if (string1.length !== string2.length) return false;

  let countLetters1 = new Map();
  let countLetters2 = new Map();

  for (let char of string1) {
    if (countLetters1.get(char))
      countLetters1.set(char, countLetters1.get(char) + 1);
    else countLetters1.set(char, 1);
  }

  for (let char of string2) {
    if (countLetters2.get(char))
      countLetters2.set(char, countLetters2.get(char) + 1);
    else countLetters2.set(char, 1);
  }

  if (checkMapEquality(countLetters1, countLetters2)) return true;
  return false;
}

function checkMapEquality(map1, map2) {
  if (map1.size !== map2.size) return false;

  for (let [key, value] of map1) {
    if (!map2.has(key)) return false;
    if (value !== map2.get(key)) return false;
  }
  return true;
}

// test cases

console.assert(checkPermutSort("abc", "acb") === true, "test1");
console.assert(checkPermutSort("abc", "abw") === false, "test2");
console.assert(checkPermutSort("abc", "abcw") === false, "test3");
