// T = O(2^n)
function fibRecursive(n) {
  if (n < 2) return n;
  return fibRecursive(n - 2) + fibRecursive(n - 1);
}

// T = O(2n) = O(n)
function fibMemo(n) {
  return fibMemoRec(
    n,
    Array.from({ length: n + 1 }, () => 0)
  );
}

function fibMemoRec(n, memo) {
  if (n < 2) return n;
  if (memo[n] === 0) {
    memo[n] = fibMemoRec(n - 2, memo) + fibMemoRec(n - 1, memo);
  }
  return memo[n];
}

// T = O(n) but S=O(n)
function fibBottomUp(n) {
  if (n < 2) return n;

  let memo = new Map();
  memo.set(0, 0);
  memo.set(1, 1);

  for (let i = 2; i <= n; i++) {
    memo.set(i, memo.get(i - 2) + memo.get(i - 1));
  }
  return memo.get(n);
}

// we can push it even further with only memoizing the two precedent values T=O(n) S=O(1)
function fibOpti(n) {
  if (n < 2) return n;

  let prevPrev = 0;
  let prev = 1;

  for (let i = 2; i < n; i++) {
    let current = prev + prevPrev;
    prevPrev = prev;
    prev = current;
  }

  return prev + prevPrev;
}

// tests

// test(fibRecursive);
test(fibMemo);
test(fibBottomUp);
test(fibOpti);

function test(fn) {
  console.assert(fn(10) === 55, "Test failed for n = 10");
  console.assert(fn(5) === 5, "Test failed for n = 5");
  console.assert(fn(70) === 190392490709135, "Test failed for n = 70");
  console.log("end");
}
