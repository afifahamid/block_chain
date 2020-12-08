console.log("          Array prototype find:          ")
console.log("                                          ")

var numbers = [5,3,6];
var oddNumber = numbers.find((x) => x % 2 == 1);
console.log(oddNumber);
console.log("                                          ")

console.log("       Array prototype findIndex:         ")
console.log("                                          ")

var numbers = [1, 2, 3];
var oddNumber = numbers.findIndex((x) => x % 2 == 1);
console.log(oddNumber);
console.log("                                          ")

console.log("       Array prototype entries:           ")
console.log("                                          ")

var numbers = [1, 2, 3, 4, 5];
var val = numbers.entries();
console.log(val.next().value);
console.log(val.next().value);
console.log(val.next().value);
console.log("                                          ")

console.log("       Array from                         ")
console.log("                                          ")

for (let i of Array.from('AFIFA')) {
    console.log(i)
   }
console.log("                                          ")   

console.log("       Array prototype keys():            ")
console.log("                                          ")

console.log(Array.from(['x', 'y'].keys()))
console.log("                                          ") 