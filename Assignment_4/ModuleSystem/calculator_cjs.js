//Export using CJS common javascript
add = (a, b) => {
  return `Sum of ${a} and ${b} is ${a + b}`;
};
sub = (a, b) => {
  return `Difference of ${a} and ${b} is ${a - b}`;
};
mul = (a, b) => {
  return `Product of ${a} and ${b} is ${a * b}`;
};
pow = (a, b) => {
  return `${a} ^ ${b} is ${a ** b}`;
};

module.exports.calcy = {
  addition: add,
  difference: sub,
  product: mul,
  power: pow,
};
