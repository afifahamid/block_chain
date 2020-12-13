console.log("                                                ")
console.log("==============CLASS=================")
console.log("                                                ")

console.log("                                    ")
console.log("          CURRICULUM VITAE          ")
console.log("                                    ")

console.log("  PERSONAL INFORMATION              ")
console.log("                                    ")

class Person {
    constructor(_FirstName,_LastName,_contact,_dob,_cnic,_e_mail){
        this.First_Name = _FirstName;
        this.Last_Name = _LastName;
        this.Contact = _contact;
        this.Cnic = _cnic;
        this.Dob = _dob ;
        this.E_mail = _e_mail ;
    }
}

var data1 = new Person("NAME : Afifa","FATHER NAME : M.Hamid Khan","CONTACT : 123456789",
                      "E-MAIL : afifahamid@gmail.com","CNIC : 1010-1010101-0","DOB : 01-01-2000")
console.log(data1.First_Name)
console.log(data1.Last_Name);
console.log(data1.Contact);
console.log(data1.E_mail);
console.log(data1.Cnic);
console.log(data1.Dob);

console.log("                                       ")
console.log("  EDUCATIONAL INFORMATION              ")
console.log("                                       ")

class Person2 {
    constructor(_one,_two,_three){
        this.one = _one;
        this.two = _two;
        this.three = _three;
    }
}

var data2 = new Person2( "Year_2013 : Matriculation from S.M Public Academy" ,
"Year_2015 : Intermediation from St.Lawrence's College"  ,
"Year_2016 : Started doing Bachelors in Software Engineering at Karachi University")
console.log(data2.one);
console.log(data2.two);
console.log(data2.three);

