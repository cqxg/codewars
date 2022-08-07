const dataReverse = (data) =>
  [
    ...data
      .join(``)
      .match(/.{8}|$/g)
      .reverse()
      .join(``),
  ].map(Number);
