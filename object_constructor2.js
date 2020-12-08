console.log(     "                                      "    );

console.log("                MARKSHEET                        ");

console.log(      "                                     "   );

console.log( "SUBJECTS                TOTAL MARKS                    OBTAINED MARKS   " );

var marksheet = new Object();

    marksheet.sub1 =    "Physics          :         100                :             87        " ;
    marksheet.sub2 =    "Mathematics      :         100                :             90        " ;
    marksheet.sub3 =    "English          :         100                :             80        " ;
    marksheet.sub4 =    "Chemistry        :         100                :             78        " ;
    marksheet.sub5 =    "Urdu             :         100                :             89        " ;
    marksheet.total =   "Total            :         500                :            424        " ;


console.log(marksheet["sub1"])
console.log(marksheet["sub2"])
console.log(marksheet["sub3"])
console.log(marksheet["sub4"])
console.log(marksheet["sub5"])
console.log(marksheet["total"])