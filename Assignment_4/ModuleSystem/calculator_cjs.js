add = (a, b) => {
  return a + b;
};
sub = (a, b) => {
  return a - b;
};
mul = (a, b) => {
  return a * b;
};
pow = (a, b) => {
  return a ** b;
};

module.exports.calcy = {
  addition: add,
  difference: sub,
  product: mul,
  power: pow,
};
