const missingWord = (nums, str) =>
  nums.some((n) => n >= str.length)
    ? "No mission today"
    : ((str) =>
        nums
          .sort((a, b) => a - b)
          .map((i) => str[i])
          .join(""))(str.toLowerCase().replace(/ /g, ""));
