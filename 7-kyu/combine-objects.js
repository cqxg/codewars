const combine = (...args) =>
  args.reduce((acc, curr) => {
    for (const key of Object.keys(curr)) {
      acc[key] = acc[key] ? acc[key] + curr[key] : curr[key];
    }
    return acc;
  }, {});
