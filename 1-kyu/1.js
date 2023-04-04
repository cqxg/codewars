const largerPow = (x) => {
  let t = 1;
  while (t < x) {
    t <<= 1;
  }
  return t;
};

const rangeSum = (l, r) => {
  return ((l + r) * (r - l + 1)) / 2;
};

const memo = {};

const elderAge = (m, n, l, t) => {
  const key = `${m},${n},${l}`;
  if (key in memo) {
    return memo[key];
  }
  if (m === 0 || n === 0) {
    return 0;
  }
  if (m > n) {
    [m, n] = [n, m];
  }
  const lm = largerPow(m);
  const ln = largerPow(n);
  if (l > ln) {
    return 0;
  }
  if (lm === ln) {
    const result =
      (rangeSum(1, ln - l - 1) * (m + n - ln) +
        elderAge(ln - n, lm - m, l, t)) %
      t;
    memo[key] = result;
    return result;
  }
  if (lm < ln) {
    const newLm = ln >> 1;
    let tmp =
      rangeSum(1, ln - l - 1) * m -
      (ln - n) * rangeSum(Math.max(0, newLm - l), ln - l - 1);
    if (l <= newLm) {
      tmp +=
        (newLm - l) * (newLm - m) * (ln - n) +
        elderAge(newLm - m, ln - n, 0, t);
    } else {
      tmp += elderAge(newLm - m, ln - n, l - newLm, t);
    }
    const result = tmp % t;
    memo[key] = result;
    return result;
  }
};
