const josephus = (items, k) => {
  let result = [];
  let index = 0;

  while (items.length > 0) {
    index = (index + k - 1) % items.length;
    result.push(items[index]);
    items.splice(index, 1);
  }

  return result;
};
