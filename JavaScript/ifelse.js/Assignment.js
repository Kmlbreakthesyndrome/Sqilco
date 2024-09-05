//1.Write a program that determines whether a given number is positive or negative.
/*
let a=-50;
if(a>0){
console.log("No. is positive")
}

else {
console.log("No. is negative")
}
*/

//2.Write a program that checks if a number is even or odd.
/*
let a = 10;
if(a%2==0) {
console.log("No. is even");
} else {
    console.log("No. is odd");
}*/

//3.Write a program to determine the greater of two numbers.
/*
let a = 10;
let b = 29;
if(a<b) {
    console.log("b is greater.");
} else 
{
    console.log("a is greater.");
}*/

//4. Suppose we need to assign different grades to students based on their
// If a student scores above 91-100,assign grade A.
 //If a student scores above 81-90,assign grade B.
 //If a student scores above 71-80,assign grade C.
 //If a student scores above 61-70,assign grade D.
 //Otherwise fail.
/*
let num = 87
if(num > 91 && num <=100) {
    console.log("Student's grade=A");
} 
else if(num>81 && num<=90) {
    console.log("Student's grade=B");
}
else if(num>71 && num<=80) {
    console.log("Student's grade = C");
}
else if(num>61 && num<=70) {
    console.log("Student's grade = D");
}
else {
    console.log("Student is fail.");
}*/

//5.Write a program that calculates the ticket price based on age with the following conditions:
//age below 12 pay a ticket price of 5,
//age below 18 pay a ticket price of 10,
//age below 60 pay a ticket price of 20,
//age over 60 pay a ticket price of 15.
/*
let price = 90
if(price >0 && price <= 12){
    console.log("Ticket price is= 5");
}
else if(price > 12 && price<=18) {
    console.log("Ticket price = 10");
}
else if(price > 18 && price<=60) {
    console.log("Ticket price = 20");
}
else if(price > 60 && price <= 80){
    console.log("Ticket price = 25");
}
else {
    console.log("50% Discount");
}*/


//6.Write a program that determines if a year is a leap year.
/*let year= 2004
if(year%4==0 || year!=100 || year %400==0) {
    console.log("This is a leap year");
} else {
    console.log("This is not a leap year");
}*/

//7.Write a program that calculates a discount based on the purchase
//amount.Prices equal or over 100 discount have a discount of 20. Prices
//equal or over 50 have a discount of 10. Otherwise discount is 0
/*let price = 60
if(price>=50 && price=)*/







//ques_sir. salary=55000, salary type= Private, resident=Indian, age=46, ID = aadhar\Driving License.
//1. 50000>, govern, Indian, age-<40= loan-50L
//2. 50000>, private, Indian, "->50 = loan-30L
//3. 30000>, private=20L\govern=25L, Indian, age=<30>40
//4. not applicable.
/* 
    let salary = 55000
    let salary_type = "private"||"Government"
    let resident = "Indian"
    let age = 46
    let id = "Aadhar"
    
    if(salary>50000 +salary<=150000) {
        if(salary_type == "Government") {
            if(resident == "Indian") {
                if(age>20 && age<40) {
                    console.log("The loan amount will be: 50 LAKHS");
                }
            }
        }
     }
     else if(salary>50000 && salary<=100000) {
        if(salary_type == "private") {
            if(resident == "Indian") {
                if(age>50 && age<65) {
                    console.log("The loan amount will be: 30 LAKHS");
                }
            }
        }
    }
    else if(salary>30000 && salary<=50000) {
        if(salary_type == "private") {
            if(resident == "Indian") {
                if(age>30 && age<40) {
                    console.log("The loan amount will be: 20 LAKHS");
                }
            }
        }
    }
                else if(salary>30000 && salary<=50000) {
                    if(salary_type == "Government") {
                        if(resident == "Indian") {
                            if(age>20 && age<40) {
                                console.log("The loan amount will be: 25 LAKHS");
                            }
                        }
                    }
                }
                else{
                    console.log("Not Applicable");
                }*/

//1.Write a program that determines whether a given number is positive or negative.
/*let num = -54
if(num < 0)
{
    console.log("Number is negative");
}
else {
    console.log("Number is positive");
}*/
//function positive or negative
/*function Positive(num){
    if(num>0) {
        return`no. is positive`
    }
    else{
        return`no. is negative`
    }
}
console.log(Positive(96));*/

//2. Write a program that checks if a number is even or odd.
/*let num= 5
if(num % 2 == 0){
    console.log("Number is even");
}
else {
    console.log("Number is odd");
}*/

//in function
/*function EvenorOdd(num) {
    if(num%2==0) {
        return`no. is even`
    }
    else{
        return`no. is odd`
    }
}
console.log(EvenorOdd(85));*/

//3. Write a program to determine the greater of two numbers.
/*let A=45
let B=87
if(A>B) {
    console.log("A is greater");
}
else{
    console.log("B is greater");
}*/

//in function
/*function Greater(a,b) {
    if(a>b) {
        return`A is greater =${a}`
    }
    else {
        return`B is greater =${b}`
    }
}
console.log(Greater(3,6));*/

//4.