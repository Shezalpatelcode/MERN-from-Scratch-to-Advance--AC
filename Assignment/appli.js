console.log("This is Captain Sheezal");
//Question 1: Create a number variable num with some value.
//Now print"good" if the number is divisible by 10 and print "bad" if it is not
let num =20;
if(num%10===0){
    console.log("Good");
}else
{
    console.log("Bad");
}


//Question 2: a string is called golden string if it starts with a character 'A' or 'a' 
// and has a total length greater than 5
//for a given string print if it is golden or not
let str= "Apple";
if ((str[0]==='A'||str[0]==='a') && str.length >5){
    console.log("Golden String");
}
else {
    console.log("Not a Golden string");
}

//Question 3 : Write a program to find the largest of the 3 numbers
 let a=10;
 let b=20;
 let c=35;
  if(a>b && a>c){
    console.log("Largest number :" + a);
  }else if(b>a && b>c){
      console.log("Largest number :" + b);
  } else{
      console.log("Largest number :" + c);
  }

//Question 4: Write a program to check if 2 numbers have the same last digit .

let num1=322;
let num2=47852;
// let l1 = num1.toString().length-1; // getting the last digit index
// let l2 = num2.toString().length-1; // getting the last digit index
// if(num1[l1]==2 && num2[l2]==2){ 
//         console.log("Yes the last digits are same");
// }
// else {
//     console.log("No the last digits are not the same");
// }
if(num1%10===num2%10){
    console.log("Numbers have the last digit same");
}
else{
    console.log("Numbers does  ot have the same last digit");
}

//Question 5: Write the switch statement to print the months in a quarter
let quarter=2;
 switch(quarter){
    case 1:
        console.log("January , Feburary , March");
        break;
    case 2:
        console.log("April , May , June");
        break;
    case 3:
        console.log("July , August , September");
        break;
    case 4:
        console.log("October , November , December");
        break;
    default:
        console.log("Invalid quarter");
 }

 //Question 6 : Prompt and the alerts 
 let name= prompt("Please enter your name");
 let age= prompt("Please enter your age");

 alert(`${name} is ${age} years old.`);
 
