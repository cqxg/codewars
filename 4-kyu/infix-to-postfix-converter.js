const toPostfix = (infix) => {
  let output = "";
  const stack = [];
  const precedence = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
    "^": 3,
  };
  for (let i = 0; i < infix.length; i++) {
    let c = infix[i];
    if (!isNaN(c)) {
      output += c;
    } else if (c === "(") {
      stack.push(c);
    } else if (c === ")") {
      while (stack[stack.length - 1] !== "(") {
        output += stack.pop();
      }
      stack.pop();
    } else {
      while (
        stack.length > 0 &&
        precedence[c] <= precedence[stack[stack.length - 1]] &&
        stack[stack.length - 1] !== "^"
      ) {
        output += stack.pop();
      }
      stack.push(c);
    }
  }
  while (stack.length > 0) {
    output += stack.pop();
  }
  return output;
};
