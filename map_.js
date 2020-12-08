console.log("                                             ");
console.log("=========SCHOOL MANAGEMENT SYSTEM=========== ");
console.log("                                              ")

// MODULE # 01
var students = [
    {id:"01", name:"Afifa", Fname:"M.Hamid Khan", Dob:"01-01-1998", POB:"Karachi" },
    {id:"02", name:"Wardah", Fname:"M.Perwaiz Malik", Dob:"07-12-1998", POB:"Karachi" },
    {id:"03", name:"Mehreen", Fname:"M.Arif", Dob:"06-10-1998", POB:"Karachi" },
    {id:"04", name:"Alisha", Fname:"M.Tariq", Dob:"11-11-1998", POB:"Karachi" },
    {id:"05", name:"Areeba", Fname:"M.Wasif", Dob:"02-04-1998", POB:"Karachi" },
]

var data = students.map(function (student){
   if(student.id === "01"){
       return console.log(student.name + " , "+ student.Dob)
   }
}) 

// MODULE # 02
console.log("                                              ")
let fees = [
    {one : "AdmissionFees" , value : "45000" },
    {two : "MonthlyFees" , value : "5000" },
    {three : "ExtracurriculumFees" , value : "2000"},
    {four : "GameFees" , value : "2000"},
]

var data2 = students.map(function (fee){
    if(fee.two === "MonthlyFees"){
        return console.log(fee.value)
    }
})

// MODULE # 03
console.log("                                              ")
let subs = [
    {sub1 : "PHYSICS" , status : "PASS" },
    {sub2 : "CHEMISTRY" , status : "PASS" },
    {sub3 : "ENGLISH" , status : "PASS"},
    {sub4 : "URDU" , status : "PASS"},
    {sub5 : "MATHS" , status : "PASS"}
]

var data3 = students.map(function (sub){
    if(subs.sub3 === "ENGLISH"){
        return console.log(sub.status)
    }
})