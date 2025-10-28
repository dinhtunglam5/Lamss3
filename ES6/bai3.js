const numbers = [3, 5, 7];
const moreNumbers = [1, 2, ...numbers, 8, 9];

const [first, second, ...others] = moreNumbers;
console.log("Phần tử đầu:", first);
console.log("Phần tử thứ hai:", second);
console.log("Phần còn lại:", others);

function sum(...args) {
  return args.reduce((total, num) => total + num, 0);
}

console.log("Tổng các số:", sum(...moreNumbers));
