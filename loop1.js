// for loop task 2

var a = ""

for(i = 0 ; i < 6 ; i++){
    a += "*"
}

for(i = 0 ; i < 6 ; i++){
    a = a.replace("*","")
    console.log(a);
}