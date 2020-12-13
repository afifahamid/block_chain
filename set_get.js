console.log("                                                ")
console.log("==============SETTER AND GETTER=================")
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
        this.contact = _contact;
        this.cnic = _cnic;
        this.dob = _dob ;
        this.e_mail = _e_mail ;
    }

    set FirstName (value1) {
        this.First_Name = value1 ;
    }
    get FirstName(){
        return this.First_Name;
    }

    set LastName (value2){
        this.Last_Name = value2 ;
    }
    get LastName(){
        return this.Last_Name;
    }

    set Contact(value3){
        this.contact = value3 ;
    }
    get Contact(){
        return this.contact;
    }

    set E_mail(value4){
        this.e_mail = value4 ;
    }
    get E_mail(){
        return this.e_mail;
    }

    set Cnic(value5){
         this.cnic = value5 ;
    }
    get Cnic(){
        return this.cnic;
    }

    set Dob(value6){
        this.dob = value6 ;
    }
    get Dob(){
        return this.dob;
    }
}

let user = new Person("Afifa","M.Hamid Khan","123456789","afifahamid@gmail.com","1010-1010101-0","01-01-2000");
console.log(user.FirstName); 
console.log(user.LastName);
console.log(user.Contact);
console.log(user.E_mail);
console.log(user.Cnic);
console.log(user.Dob);

console.log("                                       ")
console.log("  EDUCATIONAL INFORMATION              ")
console.log("                                       ")

class Person2 {
    constructor(_one,_two,_three){
        this.one = _one;
        this.two = _two;
        this.three = _three;
    }
    set IP (data) {
        this.one = data ;
    }
    get IP(){
        return this.one;
    }

    set IP2 (data2){
        this.two = data2 ;
    }
    get IP2(){
        return this.two;
    }

    set IP3(data3){
        this.three = data3 ;
    }
    get IP3(){
        return this.three;
    }

}

let user2 = new Person2("Matriculation from S.M Public Academy"
                        ,"Intermediation from Khatoon-e-Pakistan College"
                        ,"Doing Bachelors in Software Engineering")

console.log(user2.IP);
console.log(user2.IP2);
console.log(user2.IP3);