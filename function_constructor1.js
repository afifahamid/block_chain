console.log(     "                                      "    );
console.log("                CURRICULUM VITAE                        ");
console.log(      "                                     "   );
console.log("PERSONAL INFORMATION");
console.log(      "                                     "   );

function cv (){

    this.Name = "Afifa Hamid"
    this.Father_name = "M.Hamid Khan"
    this.Date_of_Birth = "01-01-2001"
    this.Contact_no = "01234567"
    this.E_mail = "afifahamid@gmail.com"
    this.CNIC = "1234-101010-6" 
}

var obj = new cv ()

console.log(obj.Name)
console.log(obj.Father_name)
console.log(obj.Contact_no)
console.log(obj.E_mail)
console.log(obj.CNIC)

console.log(     "                                      "    );
console.log("QUALIFICATION");
console.log(     "                                      "    );

function cv2 (){

    this.Year_2013 = "Matriculation from S.M Public Academy"
    this.Year_2015 = "Intermediation from St.Lawrence's College"
    this.Year_2016 = "Started doing Bachelors in Software Engineering at Karachi University"
}

var obj2 = new cv2 ()

console.log(obj2.Year_2013)
console.log(obj2.Year_2015)
console.log(obj2.Year_2016)

console.log(     "                                      "    );
console.log("ADDITIONAL QUALIFICATION");
console.log(     "                                      "    );

function cv3 (){

    this.one = "Learning Artificial Intelligence" 
    this.two = "Learning Block Chain"  
}

var obj3 = new cv3 ()

console.log(obj3.one);
console.log(obj3.two);