console.log("                                             ");
console.log("=========SCHOOL MANAGEMENT SYSTEM=========== ");
console.log("                                              ")

// MODULE # 01
let array1 = [
    {key : "Name" , value : "Afifa Hamid" },
    {key : "FName" , value : "M.Hamid Khan" },
    {key : "DOB" , value : "01-01-2000"},
    {key : "POB" , value : "Karachi"},
    {key : "Email" , value : "afifahamid@gmail.com"},
    {key : "CNIC" , value : "10101-101010-1"},
]

let a = array1.map(x => {
    let b = {}
    b[x.key] = x.value
    return console.log(b)
})

// MODULE # 02
console.log("                                              ")
let array2 = [
    {key : "AdmissionFees" , value : "45000" },
    {key : "MonthlyFees" , value : "5000" },
    {key : "ExtracurriculumFees" , value : "2000"},
    {key : "GameFees" , value : "2000"},
]

let c = array2.map(y => {
    let d = {}
    d[y.key] = y.value
    return console.log(d)
})

// MODULE # 03
console.log("                                              ")
let array3 = [
    {key : "PHYSICS" , value : "PASS" },
    {key : "CHEMISTRY" , value : "PASS" },
    {key : "ENGLISH" , value : "PASS"},
    {key : "URDU" , value : "PASS"},
    {key : "MATHS" , value : "PASS"}
]

let e = array3.map(z => {
    let f = {}
    f[z.key] = z.value
    return console.log(z)
})