const countSubsequences = (needle, haystack) => {
  const MOD = 100000000;
  const dp = Array.from({ length: needle.length + 1 }, () => 0);
  dp[0] = 1;
  for (let i = 0; i < haystack.length; i++) {
    for (let j = needle.length; j > 0; j--) {
      if (haystack[i] === needle[j - 1]) {
        dp[j] = (dp[j] + dp[j - 1]) % MOD;
      }
    }
  }
  return dp[needle.length];
};
