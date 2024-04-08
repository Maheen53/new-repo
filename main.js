// for each method //
var num = [1, 2, 3, 4, 5];
num.forEach(function (number) { return console.log(number * 2); });
// map()method //
var doubleNumber = num.map(function (number) { return number * 2; });
console.log(doubleNumber);
