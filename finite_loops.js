console.log("   FINITE LOOPS   ")
console.log("                   ")
console.log("   FOR LOOP       ")

var num = 5 
var factorial = 1 ;
for(let i = num ; i >= 1 ; i--){
    factorial *= i ;
}
console.log(factorial);

console.log("                   ")
console.log("   FOR-IN LOOP   ")
console.log("                   ")

var obj = {
    name:"AFIFA" ,
    fname: "M.HAMID KHAN" ,
    trade: "BLOCK CHAIN" ,
    section: "A"
}

for(var data in obj){
    console.log(obj[data])
}

console.log("                   ")
console.log("   FOR-OF LOOP   ")
console.log("                   ")

for(let data1 of [123,456,789]){
    console.log(data1)
}