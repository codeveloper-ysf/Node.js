function padLeft(val, num, str) {
  return '00000'.replace(/0/g, str).slice(0, num - val.length) + val;
};

const numbers = [ "12", "846", "2", "1236" ];

exports.padLeft = padLeft;
exports.numbers = numbers;
