const killer = (suspectInfo, dead) => {
  for (const key of Object.keys(suspectInfo)) {
    const res = dead.map((item) =>
      suspectInfo[key].some((sus) => sus === item)
    );
    if (res.every((item) => item)) {
      return key;
    }
  }
};
