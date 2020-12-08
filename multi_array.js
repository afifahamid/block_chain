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

// MODULE 2
function books_info(books){
    books = [book1 =["Physics1","Physics2","Physics3","Physics4","Physics5","Physics6","Physics7","Physics8"],
        book2 =["English1","English2","English3","English4","English5","English6","English7","English8"] ,
    book3 =["Urdu1","Urdu2","Urdu3","Urdu4","Urdu5","Urdu6","Urdu7","Urdu8"],
  book4 = ["Maths1","Maths2","Maths3","Maths4","Maths5","Maths6","Maths7","Maths8"],
  book5 =["ComputerScience1","ComputerScience2","ComputerScience3","ComputerScience4",
  "ComputerScience5","ComputerScience6","ComputerScience7","ComputerScience8"] ]
 
getting_books = () => {
    console.log(books)
}

books.forEach((a) => {
    console.log(a[0])
}) ;
}
const m2 = new books_info()
getting_books();
