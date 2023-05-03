const validParentheses = (parenStr) =>
  /\(\)|\[\]|\{\}/.test(parenStr)
    ? validParentheses(parenStr.replace(/\(\)|\[\]|\{\}/, ""))
    : "" === parenStr;
