const add = (num1, num2) =>
  num1 && num2
    ? Number(`${add((num1 / 10) ^ 0, (num2 / 10) ^ 0)}${(num1 % 10) + (num2 % 10)}`)
    : num1 + num2;
