var test = "test";

console.log(test);
console.log(test);

const array = Array.from({ length: 8 }, (_, i) => [i]);

// dont do
// const array2 = new Array(8).fill([]);

array[1].push([0, 1]);
console.table(array);
