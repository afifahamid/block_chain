console.log("       CALCULATOR       ")

var func1 = function(x,y){ 
    return x+y };
 function add() {
 var result1;
 result1 = func1(10,20);
 console.log("The result of addition is : " + result1)
 }
 add() 

 var func2 = function(a,b){ 
    return a-b };
 function sub() {
 var result2;
 result2 = func2(50,20);
 console.log("The result of subtraction is : " + result2)
 }
 sub()

 var func3 = function(c,d){ 
    return c*d };
 function mul() {
 var result3;
 result3 = func3(10,10);
 console.log("The result of multiplication is  : " + result3)
 }
 mul() 

 var func4 = function(j,k){ 
    return j/k };
 function div() {
 var result4;
 result4 = func4(40,2);
 console.log("The result of division is : " + result4)
 }
 div()  