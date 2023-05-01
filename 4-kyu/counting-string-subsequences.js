const countSubsequences = (needle, haystack) => {
  const MOD = 100000000;
  const dp = Array.from({ length: haystack.length + 1 }, () =>
    Array.from({ length: needle.length + 1 }, () => 0)
  );
  for (let i = 0; i <= haystack.length; i++) {
    dp[i][0] = 1;
  }
  for (let i = 1; i <= haystack.length; i++) {
    for (let j = 1; j <= needle.length; j++) {
      dp[i][j] = dp[i - 1][j];
      if (haystack[i - 1] === needle[j - 1]) {
        dp[i][j] = (dp[i][j] + dp[i - 1][j - 1]) % MOD;
      }
    }
  }
  return dp[haystack.length][needle.length] % MOD;
};
