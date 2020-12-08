console.log("          Array Method concat():          ")
console.log("                                          ")

var a = ["    name     ", " father_name ", "   contact   ", "      CNIC      ", "    DOB    " ];
var b = [" Afifa Hamid ", " M.Hamid Khan " , " 123456789 ", " 1010-1010101-1 ", " 01-10-1998 "];
var concat = a.concat(b);
console.log("After concatination : " + concat );
console.log("                                          ")

console.log("          Array Method every():          ")
console.log("                                          ")

function isBigEnough(element, index, array) {
    return (element >= 10);
   }
   var passed = [12, 5, 8, 130, 44].every(isBigEnough);
   console.log("Test Value : " + passed );
   
   
console.log("                                          ")

console.log("          Array Method filter():          ")
console.log("                                          ")

function x (element) {
    return (element >= 10);
   }
   var y = [12, 5, 8, 130, 44].filter(x);
   console.log("Test Value : " + y ); 
console.log("                                          ")

console.log("          Array Method forEach():         ")
console.log("                                          ")

var nums = new Array(11, 22, 33, 44, 55, 66, 77, 88, 99) 
console.log("Printing original array......")
nums.forEach(function(val,index) {
 console.log(val)
}) 
console.log("                                          ")

console.log("          Array Method join():         ")
console.log("                                          ")

var arr = new Array("a","b","c","d");
var str = arr.join();console.log("str : " + str );
var str = arr.join(", ");
console.log("str : " + str ); 
var str = arr.join(" + ");
console.log("str : " + str );
console.log("                                          ")

console.log("        Array Method lastIndexOf():              ")
console.log("                                                 ") 

var index = [1, 3, 5, 7, 9].lastIndexOf(5);
console.log("index is : " + index ); 
console.log("                                          ")

console.log("        Array Method pop():                      ")
console.log("                                                 ")

var numbers = [2, 4, 6, 8, 10];
var element = numbers.pop();
console.log("element is : " + element );
console.log("                                          ") 

console.log("        Array Method push():                     ")
console.log("                                                 ")

var numbers = new Array(1,2,3,4,5,6,7,8,9);
var length = numbers.push(10);
console.log("new numbers is : " + numbers ); 
console.log("                                          ")

console.log("          Array Method reduce():                 ")
console.log("                                                 ")

var total = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reduce(function(a, b){ return a + b; });
console.log("total is : " + total );
console.log("                                          ")

console.log("          Array Method reduceright():                 ")
console.log("                                                 ")

var total = [0, 1, 2, 3].reduceRight(function(a, b){ return a + b; });
console.log("total is : " + total );
console.log("                                          ")

console.log("          Array Method reverse():                 ")
console.log("                                                 ")

var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reverse();
console.log("Reversed array is : " + arr );
console.log("                                          ")

console.log("          Array Method shift():                  ")
console.log("                                                 ")

var arr = [10, 1, 2, 3].shift();
console.log("Shifted value is : " + arr )
console.log("                                          ")

console.log("          Array Method slice():                 ")
console.log("                                                 ")

var data = ["Name : Afifa Hamid", "Father Name : M.Hamid Khan", "CNIC : 1010-10101-0", "DOB : 01-01-1998"];
console.log("arr.slice( 1, 2) : " + data.slice( 1, 2) );
console.log("arr.slice( 1, 3) : " + data.slice( 2, 3) );
console.log("arr.slice( 1, 3) : " + data.slice( 2, 4) );
console.log("                                          ")

console.log("         Array Method some():                    ")
console.log("                                                 ")

function i (element) {
    return (element >= 10);
   }
   var retval = [2, 4, 6, 8, 10].some(i);
   console.log("Returned value is : " + retval );
console.log("                                          ") 

console.log("         Array Method sort():                    ")
console.log("                                                 ")

var arr = new Array(
    "Name : Afifa Hamid", 
    "Father Name : M.Hamid Khan", 
    "DOB : 01-01-1998",
    "Trade : Block Chain",
    "Section : A"
    );
var sorted = arr.sort();
console.log("Returned string is : " + sorted ); 
console.log("                                          ")

console.log("         Array Method splice():                  ")
console.log("                                                 ")

var arr = [
    "Name : Afifa Hamid", 
    "Father Name : M.Hamid Khan", 
    "DOB : 01-01-1998",
    "Trade : Block Chain",
];
var removed = arr.splice(2, 0, "Section : A");
console.log("After adding 1: " + arr );
console.log("removed is: " + removed);

removed = arr.splice(3, 1);
console.log("After adding 1: " + arr );
console.log("removed is: " + removed);
console.log("                                          ")

console.log("         Array Method toString():                ")
console.log("                                                 ")

var fruits = new Array("orange", "mango", "banana", "sugar");
var str = fruits.toString();
console.log("Returned string is : " + str );
console.log("                                          ")

console.log("         Array Method unshift():                 ")
console.log("                                                 ")

var arr = new Array("orange", "mango", "banana", "sugar");
var length = arr.unshift("water");
console.log("Returned array is : " + arr );
console.log("Length of the array is : " + length );
console.log("                                          ")
