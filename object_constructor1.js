console.log(     "                                      "    );
console.log("                CURRICULUM VITAE                        ");
console.log(      "                                     "   );
console.log("PERSONAL INFORMATION");
console.log(       "                                    "   );

var cv = new Object();

cv.Name = "Afifa Hamid" ;
cv.Father_name = "M.Hamid Khan"  ;
cv.Date_of_Birth = "01-01-2001"  ;
cv.Contact_no = "01234567" ;
cv.E_mail = "afifahamid@gmail.com" ;
cv.CNIC = "1234-101010-6" ;

console.log(cv["Name"])
console.log(cv["Father_name"])
console.log(cv["Date_of_Birth"])
console.log(cv["Contact_no"])
console.log(cv["E_mail"])
console.log(cv["CNIC"])

console.log(     "                                      "    );
console.log("QUALIFICATION");
console.log(     "                                      "    );

var cv2 = new Object();

cv2.Year_2013 = "Matriculation from S.M Public Academy" ;
cv2.Year_2015 = "Intermediation from St.Lawrence's College" ;
cv2.Year_2016 = "Started doing Bachelors in Software Engineering at Karachi University" ;

console.log(cv2["Year_2013"])
console.log(cv2["Year_2015"])
console.log(cv2["Year_2016"])

console.log(     "                                      "    );
console.log("ADDITIONAL QUALIFICATION");
console.log(     "                                      "    );

var cv3 = new Object();

cv3.one = "Learning Artificial Intelligence" ;
cv3.two = "Learning Block Chain" ;

console.log(cv3["one"])
console.log(cv3["two"])