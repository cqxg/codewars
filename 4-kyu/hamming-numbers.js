const hamming = (n) => {
  const hammingNumbers = [1];
  let i = 0,
    j = 0,
    k = 0;
  while (hammingNumbers.length < n) {
    const nextHamming = Math.min(
      hammingNumbers[i] * 2,
      hammingNumbers[j] * 3,
      hammingNumbers[k] * 5
    );
    hammingNumbers.push(nextHamming);
    if (nextHamming === hammingNumbers[i] * 2) i++;
    if (nextHamming === hammingNumbers[j] * 3) j++;
    if (nextHamming === hammingNumbers[k] * 5) k++;
  }
  return hammingNumbers[n - 1];
};
