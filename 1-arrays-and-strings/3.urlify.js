// URLify: Write a method to replace all spaces in a string with '%20: You may assume that the string
// has sufficient space at the end to hold the additional characters, and that you are given the "true"
// length of the string. (Note: If implementing in Java, please use a character array so that you can
// perform this operation in place.)
// EXAMPLE
// Input: "Mr John Smith ", 13
// Output: "Mr%20John%20Smith"

function urlify(string, size) {
  string = string.split("");

  for (let i = 0; i < size - 1; i++) {
    if (string[i] === " ") {
      string[i] = "%20";
    }
  }

  while (string.length !== size) {
    string.pop();
  }

  string = string.join("");

  return string;
}

// test cases
console.log(urlify("Mr John Smith ", 13));
console.assert(urlify("Mr John Smith ", 13) === "Mr%20John%20Smith", "test1");
