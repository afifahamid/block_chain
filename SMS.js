console.log("                                   ")
console.log("     SCHOOL MANAGEMENT SYSTEM      ")
console.log("                                   ")

//MODULE 1
function Student_info(Name,FatherName,Class,LastClass,LastPassingMarks,RollNo) {
    this.Name = "Afifa Hamid";
    this.FatherName = "Mohammad Hamid Khan";
    this.Class = "BSSE - Sem 6" ;
    this.LastClass = "BSSE - Sem 5" ;
    this.LastPassingMarks = "456 out of 500" ;
    this.RollNo = "1001";

this.Getting_info = () => {
    console.log(this.Name)
    console.log(this.FatherName)
    console.log(this.Class)
    console.log(this.LastClass)
    console.log(this.LastPassingMarks)
    console.log(this.RollNo)
} 
}
const m1 = new Student_info()
m1.Getting_info();

console.log("                 ")

//MODULE 2
function Admission_info(AdmissionFees,MonthlyFees,ExtracirculumFees,GameFees) {
   this.AdmissionFees = "25000" ;
   this.MonthlyFees = "45000" ;
   this.ExtracirculumFees = "5000" ;
   this.GameFees = "5000" ;

this.Getting_info2 = () => {
    console.log(this.AdmissionFees)
    console.log(this.MonthlyFees)
    console.log(this.ExtracirculumFees)
    console.log(this.GameFees)
} 
}
const m2 = new  Admission_info()
m2.Getting_info2();

console.log("                 ")

//MODULE 3
function Marks_info(SoftwareEngineering,Calculus,TechnicalEnglish,DigitalLogicDesign,AssemblyLanguage) {
    this.SoftwareEngineering = "Pass" ;
    this.Calculus = "Pass" ;
    this.TechnicalEnglish = "Pass" ;
    this.DigitalLogicDesign = "Pass" ;
    this.AssemblyLanguage = "Pass" ;
   
this.Getting_info3 = () => {
    console.log(this.SoftwareEngineering)
    console.log(this.Calculus)
    console.log(this.TechnicalEnglish)
    console.log(this.DigitalLogicDesign)
    console.log(this.AssemblyLanguage)   
} 
}
const m3 = new Marks_info()
m3.Getting_info3();