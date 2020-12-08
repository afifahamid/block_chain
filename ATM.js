console.log(" WELCOME TO OUR BANK ") ;

var readline = require(`readline`)
var atm = readline.createInterface(process.stdin,process.stdout)

        atm.question("ENTER PASSWORD : " , function(pass){
        {pass === "1234"? atm.question("ENTER AMOUNT : " , function(amount){
            var TotalAmount = 50000;
            console.log("TOTAL AMOUNT : " + TotalAmount);
            var FinalAmount = TotalAmount - parseInt(amount)
            console.log("AFTER DEDUCTION YOUR AMOUNT IS : " + FinalAmount);
            console.log("TAKEN AMOUNT IS : " + amount);
        atm.question("DO YOU WANT TO CONTINUE ? IF YES THEN TYPE 'Y' OR IF NO THEN TYPE 'N' AND ENTER : ",
                       function(c){
            switch (c){
                case 'Y':
                    return (
                        atm.question("ENTER PASSWORD : " , function(pass){
                            {pass === "1234"? atm.question("ENTER AMOUNT : " , function(amount){
                            var TotalAmount = 50000
                            console.log("TOTAL AMOUNT IS : " + TotalAmount);
                            var FinalAmount = TotalAmount - parseInt(amount);
                            console.log("AFTER DEDUCTION YOUR AMOUNT IS : " + FinalAmount);
                            console.log("TAKEN AMOUNT IS : " + amount);
                        }):console.log("INVALID PASSWORD");
                    }
                })
           
        ) 
                case 'N' :
                         return console.log("THANK YOU FOR USING OUR BANK :)");

                default:
                  break;
            }
                })
                    }):console.log("INVALID PASSWORD");
        }
}) 

