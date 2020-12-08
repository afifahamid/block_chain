var i,j,rows;

Console.log("");
Console.log("Display the pattern like right angle using asterisk:\n");
Console.log("------------------------------------------------------");
Console.log("");   
   
Console.log("Input number of rows : ");
rows= Convert.ToInt32(Console.ReadLine());   
for(i=1;i<=rows;i++)
   {
	for(j=1;j<=i;j++){
	   Console.log("*");
	Console.log("");
   }
  }   