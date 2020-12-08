console.log("                                    ")
console.log("          MARKSHEET                 ")
console.log("                                    ")

var marksheet = new Map();

marksheet.set("info1" , "SUBJECTS       TOTAL MARKS     OBTAINED MARKS ")
console.log("                                    ")
marksheet.set("sub1" , "ENGLISH             100                85     ")
marksheet.set("sub2" , "PHYSICS             100                75     ")
marksheet.set("sub3" , "URDU                100                82     ")
marksheet.set("sub4" , "MATHS               100                91     ")
marksheet.set("sub5" , "CHEMISTRY           100                70     ")
console.log("                                    ")
marksheet.set("info2" , "RESULT:    ");
marksheet.set("info3" , "TOTAL               500                403     ");

console.log(marksheet.get("info1"));
console.log(marksheet.get("sub1"));
console.log(marksheet.get("sub2"));
console.log(marksheet.get("sub3"));
console.log(marksheet.get("sub4"));
console.log(marksheet.get("sub5"));
console.log(marksheet.get("info2"));
console.log(marksheet.get("info3"));