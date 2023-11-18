// String Compression: Implement a method to perform basic string compression using the counts
// of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the
// "compressed" string would not become smaller than the original string, your method should return
// the original string. You can assume the string has only uppercase and lowercase letters (a - z).

// map through the string comparing the current to the next char and maintaining a count, S=O(n) - T=O(n)
function stringCompression(string) {
  let count = 1;
  let result = "";
  for (let index = 0; index < string.length - 1; index++) {
    const char = string[index];
    const nextChar = string[index + 1];

    if (char === nextChar) {
      count++;
      if (index + 1 === string.length - 1) {
        result += `${char}${count}`;
        break;
      }
    }
    if (char !== nextChar) {
      result += `${char}${count}`;
      count = 1;
      if (index + 1 === string.length - 1) {
        result += `${nextChar}${count}`;
        break;
      }
    }
  }

  return result.length < string.length ? result : string;
}

// tests

console.assert(stringCompression("aabcccccaaa") === "a2b1c5a3", "test1");
console.assert(stringCompression("abc") === "abc", "test2");
console.assert(stringCompression("aabcccccaab") === "a2b1c5a2b1", "test3");
