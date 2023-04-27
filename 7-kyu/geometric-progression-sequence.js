const geometricSequenceElements = (a, r, n) =>
  [...Array(n)].map((_, i) => a * r ** i).join(", ");
