// String Rotation: Assume you have a method isSubstring which checks if one word is a substring
// of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one
// call to isSubstring (e.g., "waterbottle" is a rotation of"erbottlewat").

function stringRotation(string1, string2) {
  string1 = string1 + string1;

  return isSubstring(string1, string2);
}

function isSubstring(s1, s2) {
  if (s2.length < s1.length) {
    const temp = s2;
    s2 = s1;
    s1 = temp;
  }
  let index1 = 0;

  for (let index2 = 0; index2 < s2.length; index2++) {
    if (s1[index1] === s2[index2]) {
      if (index1 === s1.length - 1) return true;
      index1++;
    } else {
      index1 = 0;
    }
  }
  return false;
}

// tests

console.assert(isSubstring("at", "water") === true, "test1");
console.assert(isSubstring("water", "at") === true, "test2");
console.assert(isSubstring("water", "atw") === false, "test3");

console.assert(
  stringRotation("waterbottle", "erbottlewat") === true,
  "test1.1"
);
console.assert(
  stringRotation("waterbottle", "erbottleewat") === false,
  "test1.2"
);
