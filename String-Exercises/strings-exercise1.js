let num = 1001;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
console.log(String(num).length);

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
let num1=123.45;
console.log(String(num1).length);
console.log(String(num1)[0]+"\n"+ String(num1)[1]+"\n"+String(num1)[2]+"\n"+String(num1)[3]+"\n"+String(num1)[4]+
"\n"+String(num1)[5]);

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
if (String(num1).includes('.')){
    console.log(String(num1).length-1);
    console.log("The given number is decimal number")
    } else {
    console.log(String(num1).length);
    console.log("The given number is integer number")
    }