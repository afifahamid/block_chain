console.log("    CALCULATOR   ")
console.log("                 ")

function add(a , b = 10) {
    return a+b;
   }
   console.log("The result of addition is " + add(10)) 

   function sub(a , b = 5) {
    return a-b;
   }
   console.log("The result of subtraction is " + sub(20)) 

   function mul(a, b = 4) {
    return a*b;
   }
   console.log("The result of multiplication is " + mul(5)) 

   function div(a, b = 2) {
    return a/b;
   }
   console.log("The result of division is " + div(10))     