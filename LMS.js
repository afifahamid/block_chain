console.log("                                   ")
console.log("     LIBRARY MANAGEMENT SYSTEM      ")
console.log("                                   ")

//MODULE 1
function Student_info(UserID,UserName,FatherName,ClassOfStudents,UniversityID) {
    this.UserID = "1001";
    this.UserName = "Afifa Hamid";
    this.FatherName = "Mohammad Hamid Khan";
    this.ClassOfStudents = "Bachelor in Software Engineering" ;
    this.UniversityID = "KU-UBIT-45" ;
    
this.Getting_info = () => {
    console.log(this.UserID)
    console.log(this.UserName)
    console.log(this.FatherName)
    console.log(this.ClassOfStudents)
    console.log(this.UniversityID)
   
} 
}
const m1 = new Student_info()
m1.Getting_info();

console.log("                 ")

//MODULE 2
function Books_info(Physics,English,Urdu,Maths,ComputerScience) {
    this.Physics = ["Physics1","Physics2","Physics3","Physics4","Physics5","Physics6","Physics7","Physics8"];
    this.English = ["English1","English2","English3","English4","English5","English6","English7","English8"];
    this.Urdu = ["Urdu1","Urdu2","Urdu3","Urdu4","Urdu5","Urdu6","Urdu7","Urdu8"];
    this.Maths = ["Maths1","Maths2","Maths3","Maths4","Maths5","Maths6","Maths7","Maths8"];
    this.ComputerScience = ["ComputerScience1","ComputerScience2","ComputerScience3","ComputerScience4",
                            "ComputerScience5","ComputerScience6","ComputerScience7","ComputerScience8"];
   
this.Getting_info2 = () => {
    console.log(this.English[0])
    console.log(this.English[1])
    console.log(this.English[2])
    console.log(this.English[3])
    console.log(this.English[4])
    console.log(this.English[5])
    console.log(this.English[6])
    console.log(this.English[7])

    console.log("             ")

    console.log(this.Physics[0])
    console.log(this.Physics[1])
    console.log(this.Physics[2])
    console.log(this.Physics[3])
    console.log(this.Physics[4])
    console.log(this.Physics[5])
    console.log(this.Physics[6])
    console.log(this.Physics[7])

    console.log("             ")

    console.log(this.Urdu[0])
    console.log(this.Urdu[1])
    console.log(this.Urdu[2])
    console.log(this.Urdu[3])
    console.log(this.Urdu[4])
    console.log(this.Urdu[5])
    console.log(this.Urdu[6])
    console.log(this.Urdu[7])

    console.log("             ")

    console.log(this.Maths[0])
    console.log(this.Maths[1])
    console.log(this.Maths[2])
    console.log(this.Maths[3])
    console.log(this.Maths[4])
    console.log(this.Maths[5])
    console.log(this.Maths[6])
    console.log(this.Maths[7])

    console.log("             ")

    console.log(this.ComputerScience[0])
    console.log(this.ComputerScience[1])
    console.log(this.ComputerScience[2])
    console.log(this.ComputerScience[3])
    console.log(this.ComputerScience[4])
    console.log(this.ComputerScience[5])
    console.log(this.ComputerScience[6])
    console.log(this.ComputerScience[7])

    console.log("             ")
} 
}
const m2 = new  Books_info()
m2.Getting_info2();
