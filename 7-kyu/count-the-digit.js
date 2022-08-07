const nbDig = (n, d) =>
  [...Array(n + 1)]
    .map((item, index) => index ** 2)
    .join(``)
    .split(d).length - 1;
