// One Away: There are three types of edits that can be performed on strings: insert a character,
// remove a character, or replace a character. Given two strings, write a function to check if they are
// one edit (or zero edits) away.
// EXAMPLE
// pale, pIe -> true
// pales. pale -> true
// pale. bale -> true
// pale. bake -> false

// iterate throught both strings at the time using to indexes to compare letters one by one, allowing only one difference, T=O(n) - S=O(1)
function oneEditAway(string1, string2) {
  string1 = string1.split("");
  string2 = string2.split("");

  let index2 = 0;
  let shortest = "none";

  if (string1.length === string2.length) {
  } else if (string1.length === string2.length + 1) {
    // we add an element to even out the lengths and compare every elements
    string2.push("");
    shortest = "string2";
  } else if (string2.length === string1.length + 1) {
    string1.push("");
    shortest = "string1";
  } else return false;

  let isEditDone = false;
  for (let index1 in string1) {
    if (string1[index1] !== string2[index2]) {
      if (isEditDone) return false;
      isEditDone = true;
      if (shortest === "string2") index2--;
      if (shortest === "string1") index1--;
    }

    index2++;
  }
  return true;
}

// tests
console.assert(oneEditAway("pale", "ple") === true, "test1");
console.assert(oneEditAway("pale", "pales") === true, "test2");
console.assert(oneEditAway("pwle", "pales") === false, "test3");
console.assert(oneEditAway("pales", "pwle") === false, "test4");
console.assert(oneEditAway("pale", "bale") === true, "test5");
console.assert(oneEditAway("pale", "bake") === false, "test6");
