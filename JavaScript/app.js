// console.log("Hello World");
console.log("This is Lt.Sheezal Speaking");
// let a=10;
// let b=5;
// console.log("sum is :", (a+b));
// //Arithmetic value
// let pencil=10;
// let erasor=5;
// // let output="the total price is : "+ (pencil + erasor)+ " rupees.";
// // console.log(output);

// //The template literals of the Javascript allows to avoid the 
// // unneccassry putting of the qoutation marks and plus sign
// //  in that place use can use the dollar sign and then the curly brackets
// console.log(`the total pay of the price is ${pencil+erasor} rupees`);
// console.log(a++);//10
// console.log(++a);//12
// let c =12;
// let d=c;
// console.log(d);// answer is 12;
//=============================================
// //Comparision Operators
// let age= 18;
// console.log(age<18);// false
// console.log(age>18);//false
// console.log(age>=18);//true
// console.log(age<=18);//True
//------------------------------------
// console.log("Code Before the if statement");
// let umar =23;
// if(umar>=18){
//     console.log("Yup you can drive");
//     console.log("Yup you can vote");
// }

// if(umar<18)
//     {
//     console.log("Sorry you can't drive");
//     console.log("Sorry you can't vote");
// }

// console.log("code after the iff statement");
// console.log("yup your code ends here :>");
//-------------------------------------------
// let firstname="Sheezal";
// if(firstname=="Sheezal"){
//     console.log(`Hello ${firstname}, welcome to the program!`);
// }
//----------------------------------------------------------
//Question 1: Design a traffic light system using if-else statements. 
// The program should take the color of the traffic light as input and display the appropriate message 
// (e.g., "Stop" for red, "Ready" for yellow, and "Go" for green).
// let color="Yellow";
// if(color==='red'){
//     console.log("Stop");
// }
// if(color==='Yellow') {
//     console.log("Slow Down / Get Ready");
// }
// if(color==='Green'){
//     console.log("Go");
// }
//-----------------------------------------------
//Question 2: Write a program that checks if a given number is positive, negative, or zero using if-else statements.
// let age =17;
// if(age>18){
//     console.log("you can vote");
// }
// //you can not write the else if statement without the if statement 
// // because the else if statement is used to check the condition when the if statement is false
// else if(age==18){
//     console.log("you can not vote");
// }
// else if(age<18){
//     console.log("you can not vote");
// }
// //===========================================
// //Question 3: Create a program that determines the grade of a student based on their marks using if-else statements.
//  let marks=75;
//  if(marks>80){
//     console.log("A++");
//  }
//  else if(marks>60 && marks<=80){
//     console.log("A");
//  }
//  else if(marks>33 && marks<=60){
//     console.log("B");
//  }
//  else if(marks<=33){
//     console.log("Fail");
//  }
//  //============================================
//  let month ="january";
//  if(month=="january"){
//     console.log("Winter is here");
// }
//  else if(month=="april"){
//     console.log("Summer is here");
//  }
//  //===========================================
//  //Question 4:
//  //else Statement

// let aga =18;
// if(aga>=18){
//    console.log("YOu can vote");
// }
// else{
//    console.log("you can not vote");
// }

// let color="white";

// if(color==="red"){
//    console.log("stop");
// }else if(color==="yellow"){
//    console.log("slow down");;
// }else if(color==="green"){
//    console.log("go");
// }else{
//    console.log("Traffic light is broken");
// }

//Practice Question : Create a System to calculate popcorn price based on the size customer asked for:
let size="XL";
if(size==='XL'){
   console.log("Price of the popcorn : 250/-");
}else if(size==='L'){
   console.log("Price of the popcorn : 200/-");
}else if(size==='M'){
   console.log("Price of the popcorn : 100/-");
}else if(size==='S'){
   console.log("Price of the popcorn : 50/-");
}else{
   console.log("Invalid size");
}

//Question on nested if else statement 
// let marks=32;
 
// if (marks >=33){
//    console.log("Pass");
//    if(marks >=80){
//       console.log("Grade : 0");
//    }else{
//       console.log("Grade : A");
//    }
// }else{
//    console.log("Better luck next time");
// }
//--------------------------------------------
//Logical Operators

// let marks= 90;
//  if(marks>=33 && marks>=80){
//       console.log("Pass");
//       console.log("Grade A++");
//  }
//    else if(marks>33 && marks<80){
//       console.log("Pass");
//       console.log("Grade A");
//    }

//-------------------------------
//Adding the new code by combining all the learned operators 
//it always solve from left to right
//first stament is true and the second one is also true 
//the output becomes true
// if((marks>33 && marks<=80) || !(false) ){
//    console.log("Pass");
// }

//A "good string" is  a string that starts with the letter 'a' & has a length >3 .
//  Write a Program to check if the string is a good string or not 

let str="am";
if(str[0]==='a' && str.length>3)
{
   console.log("Given String is a good string");
}
else{
   console.log("Its not a good string");
}


// Practice Question :'
//Write a program to print the safe and unsafe number
let num=12;

if((num%3===0)&&(num+1==15)||(num-1==11))
{
   console.log("Safe Number");
}
else{
   console.log("Unsafe Number");
}

//Tuthy and Falsy
//Truthy : Everything else
//Falsy  : false,0,-0,On(bigInt Value),""(empty string),null,undefined ,NaN


// let string =" ";
// if(string){
//    console.log("It has true value");
// }else{
//    console.log("It has false value");
// }
// //---------------------------------------
// let n=-10;
// if(n){
//    console.log("num is not equal to 0");
// }
// else{
//    console.log("num is equal to 0");
// }

//Switch Statement

//Example-------------->
let color="red";

switch(color){
   case "red":
      console.log("Stop");
   break;

    case "green":
      console.log("Go");
   break;

    case "yellow":
      console.log("Slow Down");
   break;

    default :
    console.log("Broken light");
}
//Sice the putting of the Break statement is neccessary 
//it gives you the stop and "coming out" point in the program 
// if not then will continue printing the next condition's output also in the 
//flow which will make it look very unclear as an output to be understood by the reader

//This was all about the switch statement


//Practice Question : Write a program to print the day of the week based on the number input
//(1 for Monday, 2 for Tuesday, etc.) using a switch statement.
let day="2";

switch(day){
   case "1":
      console.log("Monday");
   break;

    case "2":
      console.log("Tuesday");
   break;

    case "3":
      console.log("Wednesday");
   break;

   case "4":
      console.log("Thursday");
   break;

   case "5":
      console.log("Friday");
   break;

   case "6":
      console.log("Saturday");
   break;

   case "7":
      console.log("Sunday");
   break;

    default :
    console.log("Bad Day");
}

//Remember : you can mention the number in two ways 
// the string format :"2"
//the normal format: 2
//Both are totally valid and both work 
//but but whatever type you use make the whole format the same type do not mix both format 
//choose either of the format and stick to it in the whole code
//----------------------------------

//Alert and Prompt
//[
//alert("This is an alert message!");
// console.log("This is a simple log!");
// console.error("This is an error msg");
// console.warn("This is a warning msg");
// let firstName =prompt("Enter your Name");
// console.log(firstName);
//]

//String Methods
// let msg="    Hello  ";
let pass= prompt("Set your password");
let newpass =pass.trim();
console.log(newpass);


