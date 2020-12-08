console.log(     "                                      "    );

console.log("                MARKSHEET                        ");

console.log(      "                                     "   );

console.log( "SUBJECTS                TOTAL MARKS                    OBTAINED MARKS" );

function Marksheet () {

    this.sub1  =   "Physics          :         100                :             87        " 
    this.sub2 =    "Mathematics      :         100                :             90        " 
    this.sub3 =    "English          :         100                :             80        " 
    this.sub4 =    "Chemistry        :         100                :             78        " 
    this.sub5 =    "Urdu             :         100                :             89        " 
    this.total =   "Total            :         500                :            424        " 
}
var obj4 = new Marksheet ()

console.log(obj4.sub1)
console.log(obj4.sub2)
console.log(obj4.sub3)
console.log(obj4.sub4)
console.log(obj4.sub5)
console.log(obj4.total)
