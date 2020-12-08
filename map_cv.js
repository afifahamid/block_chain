console.log("                                    ")
console.log("          CURRICULUM VITAE          ")
console.log("                                    ")

console.log("  PERSONAL INFORMATION ")
console.log("                                    ")

var cv = new Map();
cv.set("Name" , "Afifa Hamid");
cv.set("FatherName" , "M.Hamid Khan");
cv.set("Contact" , "123456789");
cv.set("DOB" , "01-01-2000");
cv.set("CNIC" , "0101-101010-1");
cv.set("POB" , "Karachi");

console.log(cv.get("Name"))
console.log(cv.get("FatherName"))
console.log(cv.get("Contact"))
console.log(cv.get("DOB"))
console.log(cv.get("CNIC"))
console.log(cv.get("POB"))

console.log("                                    ")
console.log("  EDUCATIONAL INFORMATION ")
console.log("                                    ")

var cv2 = new Map();
cv2.set("one","Matriculation from S.M Public Academy");
cv2.set("two" , "Intermediation from Khatoon-e-Pakistan College")
cv2.set("three" ,"Doing Bachelors in Software Engineering")

console.log(cv2.get("one"))
console.log(cv2.get("two"))
console.log(cv2.get("three"))

console.log("                                    ")
console.log("  ADDITIONAL INFORMATION ")
console.log("                                    ")

var cv3 = new Map();
cv3.set("one" ,"Learning Artificial Intelligence");
cv3.set("two" ,"Learning Block Chain");

console.log(cv3.get("one"))
console.log(cv3.get("two")) 