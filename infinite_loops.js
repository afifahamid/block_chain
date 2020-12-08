console.log("   INFINITE LOOPS   ")
console.log("                   ")
console.log("   WHILE LOOP       ")

var num = 5;
var factorial = 1;
while(num >= 1){
    factorial = factorial * num ;
    num-- ;
}
console.log("TH FACTORIAL OF 5 IS : " + factorial);

console.log("                   ")
console.log("   DO-WHILE LOOP       ")

var n = 10;
do{
    console.log(n);
    n-- ;
}
while(n >=0);
