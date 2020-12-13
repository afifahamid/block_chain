class School{
    constructor(school_name,_FirstName,_LastName,_contact,_dob,_cnic,_e_mail){
        this.name = school_name;
        this.First_Name = _FirstName;
        this.Last_Name = _LastName;
        this.Contact = _contact;
        this.Cnic = _cnic;
        this.Dob = _dob ;
        this.E_mail = _e_mail ;
       
    }
       }


class Student extends School{
    info(){
        console.log(`The School name is :  ${this.name}`)
        console.log(`Student's name is :  ${this.First_Name}`)
        console.log(`Father's name is :  ${this.Last_Name}`)
        console.log(`Student's Contact :  ${this.Contact}`)
        console.log(`Student's DOB is : ${this.Cnic}`)
        console.log(`Studnt's CNIC is :  ${this.Dob}`)
        console.log(`Student's e-mail is :  ${this.E_mail}`)
    }
}
    
var obj = new Student("S.M Public Academy","Afifa","M.Hamid Khan","123456789", "1010-1010101-0" , "01-01-2000"
                       , "afifahamid@gmail.com")
obj.info()
