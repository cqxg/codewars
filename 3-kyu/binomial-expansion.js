const expand = (expr) => {
  const match = expr.match(/^\(([-]?\d*)([a-z])([+-]\d+)\)\^(\d+)$/);
  const a = parseInt(match[1]) || 1;
  const b = parseInt(match[3]);
  const n = parseInt(match[4]);
  const variable = match[2];
  let result = "";

  for (let i = 0; i <= n; i++) {
    const coeff =
      binomialCoefficient(n, i) * Math.pow(a, n - i) * Math.pow(b, i);
    const power = n - i;
    if (coeff === 0) continue;
    if (coeff === 1 && power !== 0) {
      result += "+";
    } else if (coeff === -1 && power !== 0) {
      result += "-";
    } else if (coeff < 0) {
      result += coeff;
    } else if (i === 0) {
      result += coeff;
    } else {
      result += "+" + coeff;
    }
    if (power === 0) {
      continue;
    } else if (power === 1) {
      result += variable;
    } else {
      result += variable + "^" + power;
    }
  }

  return result.replace(/^\+/, "");
};

const binomialCoefficient = (n, k) => {
  let coeff = 1;
  for (let i = n - k + 1; i <= n; i++) {
    coeff *= i;
  }
  for (let i = 1; i <= k; i++) {
    coeff /= i;
  }
  return coeff;
};
