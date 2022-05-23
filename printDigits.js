const printDigits = (num) => {
  while (num) {
    console.log(num % 10);
    num = Math.floor((num /= 10));
  }
};
console.log("Below should be 1");
printDigits(1);
console.log("Below should be 4, 1, 3");
printDigits(314);
console.log("Below should be 2, 1");
printDigits(12);
console.log("Below should be 6, 7, 5, 8, 9, 4, 3, 2, 5, 9, 8, 7, 6, 4, 2, 3");
printDigits(3246789523498576);
