// for diamond pattern

var a = ""
var b = ""
var num = 5

for(i = 0 ; i < 6 ; i++){
  b = ""

  for(j = 0 ; j < num ; j++){
    b += " " 
  }
  a += "* "
  num = num-1
  console.log(b+a)
}

for(i = 0 ; i < 6 ; i++){
    a = a.replace("* " , " ")
    console.log(a)
}
