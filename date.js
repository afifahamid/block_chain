var  now = new Date()
document.write(now);

document.write(now.getDate());

document.write(now.getDay());

document.write(now.getMonth());

document.write(now.getHours());

document.writ(now.getMinutes());

document.write(now.getSeconds());

document.write(now.getMilliseconds());

document.write(now.getFullYear());


// =============TO FIND PERTICULARS=====================

var abc = new Date("January 1 2021");

document.write(abc.getDay());

document.write("                ")

document.write(`${abc.getHours()} / ${abc.getMinutes()} / ${abc.getSeconds()}`)

// ===========to set ====================

var one = new Date();
one.setDate(20); 
document.write(one)

var two = new Date();
two.setFullYear(2021); 
document.write(two)

var three = new Date();
three.setFullYear(2021); 
document.write(three.getMonth())

var four = new Date();
four.setMonth(5); 
document.write(four)

// ===== to get current date format ======

var cuurent = new Date(); 
document.write(`${current.getDate()} / ${current.getMonth()} / ${current.getFullYear()}`) 