console.log("                                       ")
console.log("               CALCULATOR              ")
console.log("                                       ")

var readline = require(`readline`)
var TakeInput = readline.createInterface(process.stdin,process.stdout)

TakeInput.question("Enter First Value : " , function(a){
    TakeInput.question("Enter Second Value : " , function(b){
        TakeInput.question("Enter Operator : " , function(c){

            switch (c) {
                case c = "+" :
                   return console.log(parseInt(a) + parseInt(b)) ;
                case c = "-" :
                    return console.log(parseInt(a) - parseInt(b));
                case c = "*" :
                    return console.log(parseInt(a) * parseInt(b));
                case c = "/" :
                    return console.log(parseInt(a) / parseInt(b));
                    
                default:
                    console.log("Invalid Operator");
                    break;    
            }
            TakeInput.close();
        })
    })
})