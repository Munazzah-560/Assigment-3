//Chapter 9-11

// Question 1

// var city = prompt("Enter your city name")

// if
// (city === "karachi")
//   {console.log("Welcome to city of lights!!")
// }

// else{
//     console.log("it's not your city")
// }

// Question 2

// var gender = prompt("Enter your gender");
// var message

// if(gender === "male"){
//   console.log("Good Morning Sir!!")
// }
// else if(gender === "female"){
//   console.log("Good Morning Ma'am!!")
// }
// else{
//     console.log("incorrect message")
// }

// Question 3

// var table ="<table><hr><tr><td>Signal Color&nbsp &nbsp &nbsp</td><td>Message</td></tr><tr><td>Red</td><td>Must stop</td></tr><tr><td>Yellow</td><td>Ready to move</td></tr><tr><td>Green</td><td>Move now</td></tr></table><hr>"
// document.write(table)

// Question 4

// var fuel =prompt("litres?")
// if(fuel < "0.25 litres"){
//     document.write("Please refill the fuel in your car")
// }
// else{
//     document.write("....")
// }

// Question 5

// a
// var a=4
// if(++a===5){
//     alert("given condition for variable a is true");
// }
// b
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// c
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// e
// if (true){
//     alert("True");
// }
//     if (false){
//     alert("False");
// }
// f
// if("car" < "cat"){
//     alert("car is smaller than cat");
// }

// Question 6


// Question 7

// var secretNumber = Math.floor(Math.random() * 10) + 1;
// const guess =(prompt("Guess the secret number (between 1 and 10):"), 10);

// if (isNaN(guess)) {
//     console.log("Please enter a valid number.");
// } else if (guess === secretNumber) {
//     console.log("Bingo! Correct answer");
// } else if (guess + 1 === secretNumber) {
//     console.log("Close enough to the correct answer");
// } else {
//     console.log("Try again!");
// }

// Question 8

// var table = +prompt("Enter any number");

// if (table == "") {
//   document.write(`<h1>Divide of 3</h1> <br>`);

//   document.write(`3/ 1 = ${3 / 1} <br>
//         3 / 2 = ${3 /2} <br>
//         3 / 3 = ${3 / 3} <br>
//         3 / 4 = ${3 / 4} <br>
//         3 / 5 = ${3 / 5} <br>
//         3 / 6 = ${3 / 6} <br>
//         3 / 7 = ${3 / 7} <br>
//         3 / 8 = ${3 / 8} <br>
//         3 / 9 = ${3 / 9} <br>
//         3 / 10 = ${3 / 10} <br>
        
// `);
// } 

// else {
//   document.write(`<h1>Divide of of ${table}</h1> <br>`);
      
//   document.write(`${table} / 1 = ${table / 1} <br>
//         ${table} / 2 = ${table / 2} <br>
//         ${table} / 3 = ${table / 3} <br>
//         ${table} / 4 = ${table / 4} <br>
//         ${table} / 5 = ${table / 5} <br>
//         ${table} /6 = ${table / 6} <br>
//         ${table} / 7 = ${table / 7} <br>
//         ${table} / 8 = ${table / 8} <br>
//         ${table} / 9 = ${table / 9} <br>
//         ${table} / 10 = ${table / 10} <br>        
// `);
// }

// Question 9
// var input =prompt("Enter any number and check it's a odd or even")
// if(input % 2 ===0){
//     document.write(input + "is an even number.")
// }
// else{
//     document.write(input + "is an odd number.")
// }

// Question 10

// var temprature = +prompt("Enter your temprture");

// if (temprature  > 40) {
//   console.log("It is too hot outside");
// } 

// else if (temprature > 30) {
//   console.log("The Weather today is Normal.");
// } 

// else if (temprature > 20) {
//   console.log("Today’s Weather is cool.");
// } 

// else if (temprature > 10) {
//   console.log("OMG! Today's Weather is so cool");
// } 


// else {
//   console.log("invalid temprature");
// }

// Question 11

// var firstNumber = prompt("Enter a first number")
// var secondNumber = prompt("Enter a second number")
// console.log(firstNumber - secondNumber)
// console.log(firstNumber + secondNumber)
// console.log(firstNumber * secondNumber)
// console.log(firstNumber / secondNumber)

// Chapter 12-13

// Question 1

// var x = prompt("Enter")
// var y=x. toUpperCase()
// if(x==y){
//     console.log(y=x ,"is an uppercase")
// }
// else{
//     console.log(y=x ,"is a lowercase")
// }

// Question 2

// var integer1 = 10;
// var integer2 = 5;
// console.log(integer1,integer2)

// Question 3
// var number =prompt("Enter a number")
// if(number > 0){
//     console.log(number + " ia positive number")
// }
// else if(number < 0){
//     console.log(number + " is a negative number")
// }
// else{
//     console.log(" The number is zero")
// }

// Question 4

// Question 5

// var password = prompt("Enter your password")
// var correct = "0000000"
// if(password === correct){
//     console.log("Correct password")
// } 
// else{
//     console.log("Please Enter your password")
// }
    

// var password = prompt("Enter your password")
// var correct = "0000000"
// if(password === correct) {
//     console.log("Correct! The password you entered matches the original password")
// }
// else{
//     console.log("Incorrect password")
// }

// Question 6


// var greeting =prompt()
// var hour = 13;
// if(hour < 18){
//     console.log("Good day")
// }
// else{
//     console.log("Good Evening")
// }

// Question 7

// var time =prompt()
// if(time >= 0000 && time < 1200){
//     console.log("Good Morning")
// }
// else if(time >= 1200 && time < 1700){
//     console.log("Good afternoon")
// }
// else if(time >= 1700 && time < 2100){
//     console.log("Good evening")
// }
// else if(time >= 2100 && time < 2359){
//     console.log("Good night")
// }
// else{
//     console.log("incorrect")
// }

// Chapter 10 (If Statements)

// Qustion 1
// var city ="karachi"
// if(city ="karachi"){
//     console.log("The city of Lights")
// }

// Question 2

// if(x===y){
//     var z = prompt("Enter the value of z")
// }

// Question 3

// var zipCode =prompt("Enter zipcode")
// if(zipCode==="10010"){
//     alert("Karachi")
// }
// else{
//     alert("Please write correct city")
// }

// Question 4

// var x =1
// if(x === 1){
//     x = 10
//     console.log("Variable x has been updated to " + x)
// }

// Chapter 11 Comparision operators

// Question 1

// if(x !== "3"){
//     console.log("not equal")
// }
// else{
//     console.log("x is equal to y")
// }

// Question 2

// variable1=10
// variable2=2
// if(variable1 >= variable2){
//     console.log(variable1+"is greater to the value of"+ variable2)
// }

// Question 3

// var rollno = +prompt("Enter your rollno");
// if (rollno !== 500) {
//   console.log("equal");
// } else {
//   console.log("not equal");
// }

// Question 4

//  var rollno = +prompt("Enter your rollno");
// if (rollno !== 500) {
//    alert("Sorry!!");
// }
// else {
//    alert("Congratulation!!");
// }
    
// Question 5

// var name =prompt("Enter your first name")
// if(name !== "john"){
//     console.log("No match")
// }
// else{
//     console.log("Match")
// }

// Chapter 12 (if....else and else if statement)

// Question 1

// value1 = 10;
// value2 = 5;
// if(value1 >= value2){
//     alert("Value is greater than or equal to value 2")
// }
// else{
//     alert("value is less than value 2")
// }

// Question 2

// function calculateGrade() {
//     var totalMarks = 100;  
//     var obtainedMarks = prompt("Enter your obtained marks:");

//     obtainedMarks = Number(obtainedMarks);

//     var percentage = (obtainedMarks / totalMarks) * 100;

//     var grade;
//     if (percentage >= 90) {
//         grade = 'A';
//     } else if (percentage >= 75) {
//         grade = 'B';
//     } else if (percentage >= 50) {
//         grade = 'C';
//     } else {
//         grade = 'D';
//     }

//     alert(`Your percentage is ${percentage.toFixed(2)}% and your grade is ${grade}.`);
// }
// calculateGrade();

// Question 3

// if(a === 10){
//     alert("a is 10")
// }
// else{
//     alert("The correct value of a is ___")
// }

// Question 4

// var city = prompt("Enter where do you live?");

// if (city === "karachi")
// {
//   alert("acknowledging it is Karachi.");
// }

// else
// {
//   alert("acknowledging it is not " + city);
// }


