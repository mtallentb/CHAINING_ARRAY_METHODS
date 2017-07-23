let integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

console.log(integers.sort((first, second) => { return first - second; }).reverse().filter((element, index, array) => { if (element < 19) { return element; }}).map((element, index, array) => { return element * 1.5 - 1; }).reduce((previousValue, currentValue, index, array) => { return previousValue + currentValue; }));

